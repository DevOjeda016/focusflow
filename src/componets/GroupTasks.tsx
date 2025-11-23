import Task from "./Task";

import type { Task as TaskType } from "../types";

interface GroupTasksProps {
  tasks: TaskType[];
}

const GroupTasks = ({ tasks }: GroupTasksProps) => {
  return (
    <ul className="flex flex-col gap-2">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default GroupTasks;
