import Card from "./Card";
import { Check, ListChecks, TrendingUp } from "lucide-react";
import GroupTasks from "./GroupTasks";
import type { Task } from "../types";
interface TaskSectionProps {
  tasks: Task[];
  onStartTask: (task: Task) => void;
  onToggleComplete: (taskId: string) => void;
  isLoading: boolean;
}
const TaskSection = ({ tasks, onStartTask, onToggleComplete, isLoading }: TaskSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Tareas de alto impacto"
        description="El 20% de tus tareas generan el 80% de resultados"
        icon={<TrendingUp className='text-warning' size={24} />}
        isPriority={true}
      >
        <GroupTasks
          tasks={tasks.filter((task) => task.isPriority && (!task.isCompleted || task.isCompleting))}
          onStartTask={onStartTask}
          onToggleComplete={onToggleComplete}
          emptyMessage="No hay actividades importantes"
          isLoading={isLoading}
          isPriority={true}
        />
      </Card>
      <Card
        title="Tarea secundarias"
        description="Estas tareas se pueden hacer durante el día"
        icon={<ListChecks className='text-accent' size={24} />}
      >
        <GroupTasks
          tasks={tasks.filter((task) => !task.isPriority && (!task.isCompleted || task.isCompleting))}
          onStartTask={onStartTask}
          onToggleComplete={onToggleComplete}
          emptyMessage="No hay actividades secundarias"
          isLoading={isLoading}
        />
      </Card>
      <Card
        title="Tarea completadas"
        description="Estas actividades ya han sido completadas"
        icon={<Check className='text-accent' size={24} />}
      >
        <GroupTasks
          tasks={tasks.filter((task) => task.isCompleted && !task.isCompleting)}
          onStartTask={onStartTask}
          onToggleComplete={onToggleComplete}
          emptyMessage="No hay actividades completadas"
          isLoading={isLoading}
        />
      </Card>
    </div>
  );
};

export default TaskSection;