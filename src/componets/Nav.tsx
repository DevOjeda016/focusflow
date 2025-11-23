import { Tabs } from "@heroui/react";
import Advice from "./Advice";

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
      <Tabs.Panel className="pt-4" id="Tareas">
        <p>Lista de tareas</p>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="Timer">
        <p>Timer</p>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="Progreso">
        <p>Progreso</p>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Nav;
