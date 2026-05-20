import { AnalyzeRequest, AnalyzeResponse } from '../types/types'

const HF_API_URL = 'https://router.huggingface.co/hf-inference/models/facebook/bart-large-mnli';
const TIMEOUT_MS = 60000;

export async function analyze(request: AnalyzeRequest): Promise<AnalyzeResponse> {
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
        hypothesis_template: `This action {} with the guideline: ${request.guideline}`
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


