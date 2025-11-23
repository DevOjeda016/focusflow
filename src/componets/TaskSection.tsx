import Card from "./Card";
import { Check, ListChecks, TrendingUp } from "lucide-react";
import GroupTasks from "./GroupTasks";
import type { Task } from "../types";
interface TaskSectionProps {
  tasks: Task[];
  onStartTask: (task: Task) => void;
  onToggleComplete: (taskId: string) => void;
}
const TaskSection = ({ tasks, onStartTask, onToggleComplete }: TaskSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Card
        title="Tareas de alto impacto"
        description="El 20% de tus tareas generan el 80% de resultados"
        icon={<TrendingUp className='text-warning' size={24} />}
        isPriority={true}
      >
        <GroupTasks tasks={tasks.filter((task) => task.isPriority && (!task.isCompleted || task.isCompleting))} onStartTask={onStartTask} onToggleComplete={onToggleComplete} />
      </Card>
      <Card
        title="Tarea secundarias"
        description="Estas tareas se pueden hacer durante el resto del día"
        icon={<ListChecks className='text-accent' size={24} />}
      >
        <GroupTasks tasks={tasks.filter((task) => !task.isPriority && (!task.isCompleted || task.isCompleting))} onStartTask={onStartTask} onToggleComplete={onToggleComplete} />
      </Card>
      <Card
        title="Tarea completadas"
        description="Estas actividades ya han sido completadas"
        icon={<Check className='text-accent' size={24} />}
      >
        <GroupTasks tasks={tasks.filter((task) => task.isCompleted && !task.isCompleting)} onStartTask={onStartTask} onToggleComplete={onToggleComplete} />
      </Card>
    </div>
  );
};

export default TaskSection;