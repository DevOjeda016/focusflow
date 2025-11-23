import Timer from "./Timer";
import type { Task } from "../types";

interface TimerSectionProps {
  activeTask: Task | null;
  onTimerComplete: () => void;
}

const TimerSection = ({ activeTask, onTimerComplete }: TimerSectionProps) => {
  return (
    <Timer activeTask={activeTask} onTimerComplete={onTimerComplete} />
  )
}

export default TimerSection
