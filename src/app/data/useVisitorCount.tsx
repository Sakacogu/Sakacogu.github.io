'use client';

import React from 'react';
import useVisitorCount from '../hooks/useVisitorCount';

export default function VisitorCounter() {
  const visits = useVisitorCount();
  return (
    <p className="text-sm">
      You have visited/reloaded this page <strong>{visits}</strong>{' '}
      {visits === 1 ? 'time' : 'times'} on this device!
    </p>
  );
}
