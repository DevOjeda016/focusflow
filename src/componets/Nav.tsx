import { Tabs } from "@heroui/react";
import Advice from "./Advice";
import TaskSection from "./TaskSection";
import type { Task } from "../types";

const tasks: Task[] = [
  {
    id: "1",
    title: "Hacer ejercicio",
    time: "25 minutos",
    isPriority: true,
  },
  {
    id: "2",
    title: "Terminar tarea de matemáticas sobre integrales",
    time: "25 minutos",
    isPriority: false,
  },
  {
    id: "3",
    title: "Terminar tarea de matemáticas sobre integrales",
    time: "25 minutos",
    isPriority: false,
    isCompleted: true,
  },
];

const Nav = () => {
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
      <Tabs.Panel id="Tareas">
        <TaskSection tasks={tasks} />
      </Tabs.Panel>
      <Tabs.Panel id="Timer">
        <p>Timer</p>
      </Tabs.Panel>
      <Tabs.Panel id="Progreso">
        <p>Progreso</p>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Nav;
