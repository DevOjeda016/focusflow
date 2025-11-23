import { Button, Card } from "@heroui/react";
import { Play, RotateCcw, Pause } from "lucide-react";
import type { Task } from "../types";

interface TimerProps {
  activeTask: Task | null;
  time: number;
  isActive: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
  setCustomTime: (minutes: number) => void;
}

const Timer = ({ time, isActive, toggleTimer, resetTimer, setCustomTime }: TimerProps) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };



  return (
    <Card className="w-full max-w-md flex flex-col items-center rounded-xl">
      <h2 className="text-2xl font-bold text-center">Temporizador</h2>
      <p className="text-sm">Limita tu tiempo para ser más eficiente</p>
      <div className="flex w-full flex-col gap-2 items-center bg-accent-soft p-4 rounded-xl shadow-accent-soft">
        <span className="text-7xl font-bold text-center text-accent">{formatTime(time)}</span>
        <div className="flex gap-2 w-full justify-center">
          <Button type="button" variant="primary" onPress={toggleTimer}>
            {isActive ? <Pause size={24} /> : <Play size={24} />}
            {isActive ? "Pausar" : "Iniciar"}
          </Button>
          <Button type="button" variant="secondary" onPress={resetTimer}>
            <RotateCcw size={24} />
            Reanudar
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm text-center font-bold">Bloques de tiempo sugeridos</p>
        <div className="flex gap-2 flex-wrap justify-center">
          <Button type="button" variant="tertiary" onPress={() => setCustomTime(15)}>
            <Play size={24} />
            15 minutos
          </Button>
          <Button type="button" variant="tertiary" onPress={() => setCustomTime(25)}>
            <Play size={24} />
            25 minutos
          </Button>
          <Button type="button" variant="tertiary" onPress={() => setCustomTime(30)}>
            <Play size={24} />
            30 minutos
          </Button>
        </div>
        <p className="text-sm text-center text-muted-foreground">Tiempos cortos ayudan a mantener y evitar la procasticación</p>
      </div>
    </Card>
  );
};

export default Timer;
