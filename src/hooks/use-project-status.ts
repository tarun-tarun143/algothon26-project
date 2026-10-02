'use client';

import { useMemo, useState } from 'react';
import type { ProjectStatus } from '@/types';

export function useProjectStatus() {
  const [status, setStatus] = useState<ProjectStatus>('building');

  const label = useMemo(() => {
    switch (status) {
      case 'idea':
        return 'Idea stage';
      case 'building':
        return 'Building';
      case 'ready':
        return 'Submission ready';
    }
  }, [status]);

  return { status, setStatus, label };
}
