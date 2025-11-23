import { Tabs } from "@heroui/react";
import { useEffect, useState } from "react";
import Advice from "./Advice";
import TaskSection from "./TaskSection";
import type { Task } from "../types";
import TimerSection from "./TImerSection";

const Nav = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState("Tareas");
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const handleStartTask = (task: Task) => {
    setActiveTask(task);
    setActiveTab("Timer");
  };

  const handleTimerComplete = () => {
    setActiveTab("Tareas");
    if (activeTask) {
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === activeTask.id ? { ...t, isCompleted: true, isCompleting: true } : t
        )
      );

      setTimeout(() => {
        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t.id === activeTask.id ? { ...t, isCompleting: false } : t
          )
        );
        setActiveTask(null);
      }, 1500);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const setCustomTime = (minutes: number) => {
    setIsActive(false);
    setTime(minutes * 60);
  };

  useEffect(() => {
    if (activeTask) {
      setTime(activeTask.time * 60);
      setIsActive(true);
    }
  }, [activeTask]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isActive) {
      setIsActive(false);
      handleTimerComplete();
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleToggleTaskCompletion = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => {
        if (t.id === taskId) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  };

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <Tabs
      className="w-full max-w-md flex flex-col gap-6"
      selectedKey={activeTab}
      onSelectionChange={(key) => setActiveTab(key as string)}
    >
      <Tabs.ListContainer>
        <Tabs.List aria-label="Options">
          <Tabs.Tab id="Tareas">
            Tareas
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="Timer">
            Timer
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="Progreso">
            Progreso
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Advice />
      <Tabs.Panel className="p-0" id="Tareas">
        <TaskSection tasks={tasks} onStartTask={handleStartTask} onToggleComplete={handleToggleTaskCompletion} />
      </Tabs.Panel>
      <Tabs.Panel className="p-0" id="Timer">
        <TimerSection
          activeTask={activeTask}
          time={time}
          isActive={isActive}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
          setCustomTime={setCustomTime}
        />
      </Tabs.Panel>
      <Tabs.Panel className="p-0" id="Progreso">
        <p>Progreso</p>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Nav;
