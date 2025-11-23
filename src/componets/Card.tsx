import { cn } from "@heroui/react";

interface CardProps {
  title: string;
  description: string;
  isPriority?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Card = ({ title, description, isPriority, icon, children }: CardProps) => {
  return (
    <div className={cn("shadow-surface p-4 w-full max-w-md flex flex-col rounded-xl gap-4", isPriority ? "bg-warning-soft border-warning border-2" : "bg-surface")}>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {icon}
          <p className={cn("font-bold", isPriority ? "text-warning" : "")}>{title}</p>
        </div>
        <p className={cn("text-sm", isPriority ? "text-warning" : "")}>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;