export interface Task {
  id: string;
  title: string;
  time: string;
  isPriority?: boolean;
  isCompleted?: boolean;
  isCompleting?: boolean;
}
