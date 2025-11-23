import { Checkbox } from "@heroui/react";
import { Label } from "@heroui/react";
import { Play } from "lucide-react";
import { cn } from "@heroui/react";

import type { Task as TaskType } from "../types";

const Task = ({ title, time, isPriority, isCompleted }: TaskType) => {
  return (
    <li className={cn('shadow-surface rounded-xl p-4 flex justify-between items-center gap-4', isPriority ? 'bg-warning-soft' : '')}>
      <div className="flex items-center gap-4">
        <Checkbox isDisabled={isCompleted} defaultSelected={isCompleted} id="task">
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
        </Checkbox>
        <div className="flex gap-1 flex-col">
          <Label htmlFor="task" className={cn('font-bold', isCompleted ? 'line-through' : '')}>{title}</Label>
          <div className="flex items-center flex-wrap gap-2">
            <p className="text-xs">{time}</p>
            {isPriority && <span className="text-xs bg-warning px-2 py-1 rounded-full text-white">Alta prioridad</span>}
          </div>
        </div>
      </div>
      {isCompleted && <button className={cn("rounded-xl p-2 w-12 h-12", isPriority ? "bg-warning" : "bg-accent")} type="button"><Play className="m-auto text-white" size={24} /></button>}
    </li>
  );
};

export default Task;
