import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { cardEdit } from "../../lib/ReducersSelector/selector";
import Card from "./Card";

const Cards = ({ onAddCard }: { onAddCard: () => void }) => {
  const cards = useSelector(cardEdit);

  return (
    <div className="board">
      {cards.map((card, index) => (
        <Droppable key={card.PARENT_ID} droppableId={card.PARENT_ID}>
          {(provided) => (
            <div
              className="column"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Card card={card} index={index} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
      <button onClick={onAddCard}>Add Card</button>
    </div>
  );
};

export default Cards;
