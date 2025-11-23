import Timer from "./Timer";
import type { Task } from "../types";

interface TimerSectionProps {
  activeTask: Task | null;
  time: number;
  isActive: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
  setCustomTime: (minutes: number) => void;
}

const TimerSection = (props: TimerSectionProps) => {
  return (
    <Timer {...props} />
  )
}

export default TimerSection
