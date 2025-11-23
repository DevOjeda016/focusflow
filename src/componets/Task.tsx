import { Button, Checkbox } from "@heroui/react";
import { Label } from "@heroui/react";
import { Play } from "lucide-react";
import { cn } from "@heroui/react";

import type { Task as TaskType } from "../types";

interface TaskProps extends TaskType {
  onStart: () => void;
  onToggleComplete: () => void;
}

const Task = ({ title, time, isPriority, isCompleted, onStart, onToggleComplete }: TaskProps) => {
  return (
    <li className={cn('shadow-surface rounded-xl p-4 flex justify-between items-center gap-4', isPriority ? 'bg-warning-soft' : 'bg-accent-soft')}>
      <div className="flex items-center gap-4">
        <Checkbox isDisabled={isCompleted} isSelected={isCompleted} onChange={onToggleComplete} id="task">
          <Checkbox.Control className="size-6">
            <Checkbox.Indicator />
          </Checkbox.Control>
        </Checkbox>
        <div className="flex gap-1 flex-col">
          <Label htmlFor="task" className={cn('font-bold', isCompleted ? 'line-through' : '')}>{title}</Label>
          <div className="flex items-center flex-wrap gap-2">
            <p className="text-xs">{time} min</p>
            {isPriority && <span className="text-xs bg-warning px-2 py-1 rounded-full text-white">Alta prioridad</span>}
          </div>
        </div>
      </div>
      {!isCompleted &&
        <div className="w-12 h-12">
          <Button isIconOnly className={cn("rounded-xl p-2 w-12 h-12", isPriority ? "bg-warning" : "bg-accent")} type="button" onPress={onStart}>
            <Play className="m-auto text-white" size={24} />
          </Button>
        </div>
      }
    </li>
  );
};

export default Task;
