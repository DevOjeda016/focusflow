import Task from "./Task";

import type { Task as TaskType } from "../types";

interface GroupTasksProps {
  tasks: TaskType[];
  onStartTask: (task: TaskType) => void;
  onToggleComplete: (taskId: string) => void;
  emptyMessage?: string;
}

const GroupTasks = ({ tasks, onStartTask, onToggleComplete, emptyMessage = "No hay actividades pendientes" }: GroupTasksProps) => {
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
