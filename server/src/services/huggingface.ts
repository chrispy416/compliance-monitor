import { AnalyzeRequest, AnalyzeResponse } from '../types/types'

const HF_API_URL = 'https://router.huggingface.co/hf-inference/models/facebook/bart-large-mnli';

export async function analyze(request: AnalyzeRequest): Promise<AnalyzeResponse> {
  // handle no guideline edge case (chose to do it this way because model was not happy with no guidelines)
  const NO_GUIDELINE = ['no guidelines', 'none', 'n/a', 'no guideline exists']

  const hasNoGuideline = request.guideline === '' || NO_GUIDELINE.some(phrase => request.guideline.toLowerCase().includes(phrase));

  if(hasNoGuideline) {
    return {
      action: request.action,
      guideline: request.guideline,
      result: 'UNCLEAR',
      confidence: 0,
      timestamp: new Date().toISOString(),
    };
  }

  // happy path with guideline
  const response = await fetch(HF_API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.HF_TOKEN}`,
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      inputs: request.action,
      parameters: {
        candidate_labels: ['complies', 'deviates', 'unclear'],
      }
    }),
  });

  if (!response.ok) {
    throw new Error(`HF API error: ${response.status} ${response.statusText}`)
  }

  const data = await response.json();

  if (!data || !Array.isArray(data) || data.length === 0) {
    throw new Error('Invalid response from HF API')
  }

  const topLabel = data[0]?.label;
  const topScore = data[0]?.score;

  const analyzeResponse: AnalyzeResponse = {
    action: request.action,
    guideline: request.guideline,
    result: topLabel.toUpperCase() as 'COMPLIES' | 'DEVIATES' | 'UNCLEAR',
    confidence: Math.round(topScore * 100) / 100,
    timestamp: new Date().toISOString(),
  }

  return analyzeResponse
}


