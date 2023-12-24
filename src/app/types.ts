export type Note = {
  id: string;
  content: string;
  priority: Priority;
  status: Status;
};

export enum Priority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export enum Status {
  DONE = 'DONE',
  DELETED = 'DELETED',
  INCOMPLETE = 'INCOMPLETE',
}
