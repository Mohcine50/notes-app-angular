export type Note = {
  id: string;
  content: string;
  priority: Priority;
};

export enum Priority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}
