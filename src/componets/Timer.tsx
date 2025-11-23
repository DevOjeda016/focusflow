import { Button, Card } from "@heroui/react";
import { Play, RotateCcw } from "lucide-react";

const Timer = () => {
  return (
    <Card className="w-full max-w-md flex flex-col items-center rounded-xl">
      <h2 className="text-2xl font-bold text-center">Temporizador</h2>
      <p className="text-sm">Limita tu tiempo para ser más eficiente</p>
      <div className="flex w-full flex-col gap-2 items-center bg-accent-soft p-4 rounded-xl shadow-accent-soft">
        <span className="text-7xl font-bold text-center text-accent">25:00</span>
        <div className="flex gap-2 w-full justify-center">
          <Button type="button" variant="primary">
            <Play size={24} />
            Iniciar
          </Button>
          <Button type="button" variant="secondary">
            <RotateCcw size={24} />
            Reanudar
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm text-center font-bold">Bloques de tiempo sugeridos</p>
        <div className="flex gap-2 flex-wrap justify-center">
          <Button type="button" variant="tertiary">
            <Play size={24} />
            15 minutos
          </Button>
          <Button type="button" variant="tertiary">
            <Play size={24} />
            25 minutos
          </Button>
          <Button type="button" variant="tertiary">
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
