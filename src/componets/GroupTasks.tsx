import Task from "./Task";

import type { Task as TaskType } from "../types";

interface GroupTasksProps {
  tasks: TaskType[];
  onStartTask: (task: TaskType) => void;
  onToggleComplete: (taskId: string) => void;
}

const GroupTasks = ({ tasks, onStartTask, onToggleComplete }: GroupTasksProps) => {
  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task key={task.id} {...task} onStart={() => onStartTask(task)} onToggleComplete={() => onToggleComplete(task.id)} />
      ))}
    </ul>
  );
};

export default GroupTasks;
