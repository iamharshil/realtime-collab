'use client';

import { init } from '@squircle/core';
import * as React from 'react';

export function SquircleProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => void init(), []);
  return children;
}