import { useState } from 'react';
import type {AnalyzeResponse, AnalyzeRequest} from "../types/types.ts";

interface UseAnalyzeState {
  result: AnalyzeResponse | null
  isLoading: boolean
  error: string | null
}
export const useAnalyze = () => {
  const [state, setState] = useState<UseAnalyzeState>({
    result: null,
    isLoading: false,
    error: null,
  });

  const analyze = async (request: AnalyzeRequest) => {
    setState({result: null, isLoading: true, error: null})

    try {
      const response = await fetch('/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request),
      });

      if(!response.ok) {
        throw new Error(`Request Failed: ${response.status}`);
      }

      const data: AnalyzeResponse = await response.json();
      setState({
        result: data,
        isLoading: false,
        error: null
      });
    } catch(err) {
      setState({
        result: null,
        isLoading: false,
        error: `Something went wrong: ${err}`
      })
    }
  };

  return { ...state, analyze };
}