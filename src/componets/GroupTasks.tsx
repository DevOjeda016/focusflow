import Task from "./Task";
import SkeletonTask from "./SkeletonTask";

import type { Task as TaskType } from "../types";

interface GroupTasksProps {
  tasks: TaskType[];
  onStartTask: (task: TaskType) => void;
  onToggleComplete: (taskId: string) => void;
  emptyMessage?: string;
  isLoading?: boolean;
  isPriority?: boolean;
}

const GroupTasks = ({ tasks, onStartTask, onToggleComplete, emptyMessage = "No hay actividades pendientes", isLoading = false, isPriority = false }: GroupTasksProps) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonTask key={index} priority={isPriority} />
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return <p className="text-sm text-gray-500 italic text-center py-4">{emptyMessage}</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task key={task.id} {...task} onStart={() => onStartTask(task)} onToggleComplete={() => onToggleComplete(task.id)} />
      ))}
    </ul>
  );
};

export default GroupTasks;
