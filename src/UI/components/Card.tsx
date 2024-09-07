import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { CardType } from "../../lib/StatesReducers/createCard";

const Card = ({ card, index }: { card: CardType; index: number }) => {
  return (
    <Draggable draggableId={card.PARENT_ID} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3>{card.CARD_NAME}</h3>
          {/* Renderizar tareas aquí */}
          {card.tasks?.map((task, taskIndex) => (
            <Draggable
              key={task.TASK_ID}
              draggableId={task.TASK_ID}
              index={taskIndex}
            >
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <p>{task.TASK_NAME}</p>
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
