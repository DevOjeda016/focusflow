"use client";

import { Button, Checkbox, Description, Input, Label, Modal, NumberField, Surface, TextField, Tooltip } from "@heroui/react";
import { Plus, NotebookTabs } from "lucide-react";
import { useState } from "react";
import type { Task } from "../types";

const ModalForm = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(25);
  const [isPriority, setIsPriority] = useState(false);

  const [isInvalidTitle, setIsInvalidTitle] = useState(false);
  const [isInvalidTime, setIsInvalidTime] = useState(false);

  const handleSubmit = async (close: () => void) => {
    // Reset validation
    setIsInvalidTitle(false);
    setIsInvalidTime(false);

    let isValid = true;

    if (!title.trim()) {
      setIsInvalidTitle(true);
      isValid = false;
    }

    if (!time || time <= 0) {
      setIsInvalidTime(true);
      isValid = false;
    }

    if (!isValid) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      time: Number(time),
      isPriority,
      isCompleted: false,
      isCompleting: false
    };

    try {
      await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      // Reset form
      setTitle("");
      setTime(25);
      setIsPriority(false);
      close();

      // Reload to show new task
      window.location.reload();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <Modal>
      <Tooltip>
        <Button
          className='fixed bottom-6 right-6'
          isIconOnly={true}
          size="lg"
          aria-label="Agregar nueva tarea"
        >
          <Plus size={24} />
        </Button>
        <Tooltip.Content>
          <p>Agregar tarea</p>
        </Tooltip.Content>
      </Tooltip>
      <Modal.Container placement="auto" backdropClassName='h-screen' >
        <Modal.Dialog className="sm:max-w-md">
          {({ close }) => (
            <>
              <Modal.CloseTrigger />
              <Modal.Header>
                <div className="flex items-center gap-2">
                  <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <NotebookTabs />
                  </Modal.Icon>
                  <Modal.Heading className="text-accent font-bold">Nueva tarea</Modal.Heading>
                </div>
                <p className="text-muted text-sm">
                  Agrega una nueva tarea para comenzar a trabajar.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(close); }}>
                    <TextField className="w-full" name="title" isRequired isInvalid={isInvalidTitle}>
                      <Label>Título</Label>
                      <Input
                        placeholder="Ej. Estudiar matemáticas"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                          setIsInvalidTitle(false);
                        }}
                      />
                    </TextField>

                    <NumberField
                      isRequired
                      defaultValue={25}
                      minValue={1}
                      name="time"
                      value={time}
                      onChange={(val) => {
                        setTime(Number(val));
                        setIsInvalidTime(false);
                      }}
                      isInvalid={isInvalidTime}
                    >
                      <Label>Duración (minutos)</Label>
                      <NumberField.Group>
                        <NumberField.DecrementButton />
                        <NumberField.Input className="w-full" />
                        <NumberField.IncrementButton />
                      </NumberField.Group>
                      <Description>Se sugiere tiempos cortos de 1 a 25 minutos</Description>
                    </NumberField>

                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="form-priority"
                        name="priority"
                        isSelected={isPriority}
                        onChange={setIsPriority}
                      >
                        <Checkbox.Control className="size-5">
                          <Checkbox.Indicator />
                        </Checkbox.Control>
                      </Checkbox>
                      <Label htmlFor="form-priority">Prioritaria</Label>
                    </div>
                  </form>
                </Surface>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onPress={close}>
                  Cancelar
                </Button>
                <Button onPress={() => handleSubmit(close)}>Agregar tarea</Button>
              </Modal.Footer>
            </>
          )}
        </Modal.Dialog>
      </Modal.Container>
    </Modal>
  );
}

export default ModalForm;
