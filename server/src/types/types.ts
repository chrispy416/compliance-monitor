export interface AnalyzeRequest {
  action: string
  guideline: string
}

export interface AnalyzeResponse {
  action: string
  guideline: string
  result: 'COMPLIES' | 'DEVIATES' | 'UNCLEAR'
  confidence: number
  timestamp: string
}