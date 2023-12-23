export type Note = {
  id: string;
  content: string;
  priority: Priority;
};

export enum Priority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}
