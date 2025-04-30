'use client';
import { useState, useEffect } from 'react';

export default function useVisitorCount(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const prev = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    const next = prev + 1;
    localStorage.setItem('visitorCount', String(next));
    setCount(next);
  }, []);

  return count;
}
