import { useState } from 'react';
import type {AnalyzeResponse} from "../types/types.ts";

const STORAGE_KEY = 'compliance-monitor-history';
const MAX_STORAGE = 4;

const fetchFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : []
  } catch(err) {
    console.error('Failed to load history from local storage: ', err);
    return [];
  }
}

export const useHistory = () => {
  const [history, setHistory] = useState<AnalyzeResponse[]>(fetchFromStorage);

  const addToHistory = (result: AnalyzeResponse) => {
    const updatedHistory = [result, ...history].splice(0, MAX_STORAGE);
    setHistory(updatedHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  }

  return { history, addToHistory}
}