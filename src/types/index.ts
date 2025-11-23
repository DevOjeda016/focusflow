export interface Task {
  id: string;
  title: string;
  time: number;
  isPriority?: boolean;
  isCompleted?: boolean;
  isCompleting?: boolean;
}
