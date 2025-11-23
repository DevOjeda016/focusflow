import { Zap } from "lucide-react";

interface AdviceProps {
  highImpactCount: number;
}

const Advice = ({ highImpactCount }: AdviceProps) => {
  return (
    <div className="bg-surface shadow-surface px-4 py-6 flex items-center justify-between rounded-3xl gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <Zap className="text-warning" size={24} />
          <p className="font-bold text-sm">Tareas de alto impacto</p>
        </div>
        <p className="text-xs">El 20% de tus tareas generan el 80% de resultados</p>
      </div>
      <span className="text-accent font-bold text-2xl">{highImpactCount}</span>
    </div>
  );
};

export default Advice;