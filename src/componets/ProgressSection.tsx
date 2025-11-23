import type { Task } from "../types";

interface ProgressSectionProps {
  tasks: Task[];
}

const ProgressSection = ({ tasks }: ProgressSectionProps) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.isCompleted).length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Mapping isPriority to "impact"
  // High impact = isPriority: true
  // Low impact = isPriority: false
  const highImpactTasks = tasks.filter((t) => t.isPriority);
  const lowImpactTasks = tasks.filter((t) => !t.isPriority);

  const highImpactCompleted = highImpactTasks.filter((t) => t.isCompleted).length;
  const lowImpactCompleted = lowImpactTasks.filter((t) => t.isCompleted).length;

  const allHighImpactCompleted = highImpactTasks.length > 0 && highImpactCompleted === highImpactTasks.length;

  return (
    <div className="relative h-full">
      <div className="space-y-4 pb-20">
        <div className="bg-surface rounded-2xl p-6 shadow-lg">
          <h2 className="font-bold text-gray-800 mb-4 text-center">Tu Progreso Hoy</h2>

          {/* Barra de progreso */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Completado</span>
              <span className="text-2xl font-bold text-accent">{completionRate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-accent h-full rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>

          {/* Estadísticas de impacto - LEY DE PARETO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-warning-soft rounded-xl p-4 border border-warning-soft-hover">
              <div className="text-3xl font-bold text-warning mb-1 text-center">
                {highImpactCompleted}/{highImpactTasks.length}
              </div>
              <div className="text-xs text-gray-600 text-center">Tareas clave</div>
              <div className="text-xs text-warning font-medium mt-1 text-center">Alto impacto</div>
            </div>

            <div className="bg-accent-soft rounded-xl p-4 border border-accent-soft-hover">
              <div className="text-3xl font-bold text-accent mb-1 text-center">
                {lowImpactCompleted}/{lowImpactTasks.length}
              </div>
              <div className="text-xs text-gray-600 text-center">Tareas secundarias</div>
              <div className="text-xs text-accent font-medium mt-1 text-center">Completadas</div>
            </div>
          </div>
        </div>

        {/* Mensaje motivacional basado en Ley de Pareto */}
        <div className="bg-accent-soft rounded-2xl p-6">
          <h4 className="font-bold text-sm mb-2">💡 Consejo del día</h4>
          <p className="text-xs">
            {!allHighImpactCompleted
              ? "Enfócate primero en tus tareas de alto impacto. Ellas representan el 20% que genera el 80% de tus resultados."
              : "¡Increíble! Has completado tus tareas clave. Ahora puedes abordar las secundarias con tranquilidad."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
