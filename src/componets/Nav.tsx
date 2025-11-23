import { Tabs } from "@heroui/react";
import { useEffect, useState } from "react";
import Advice from "./Advice";
import TaskSection from "./TaskSection";
import type { Task } from "../types";
import TimerSection from "./TImerSection";

const Nav = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <Tabs className="w-full max-w-md flex flex-col gap-6">
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
        <TaskSection tasks={tasks} />
      </Tabs.Panel>
      <Tabs.Panel className="p-0" id="Timer">
        <TimerSection />
      </Tabs.Panel>
      <Tabs.Panel className="p-0" id="Progreso">
        <p>Progreso</p>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Nav;
