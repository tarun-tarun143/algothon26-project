export type ProjectStatus = 'idea' | 'building' | 'ready';

export interface ProjectInfo {
  name: string;
  description: string;
  status: ProjectStatus;
}
