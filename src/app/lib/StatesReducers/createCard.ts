import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Card {
  PARENT_ID: string;
  editable: boolean;
  CARD_NAME: string;
  tasks?: Task[];
}

interface Task {
    TASK_ID: string;
    TASK_NAME: string;
    PARENT_ID: string;  
    editable: boolean; 
}
interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

const createCardSlice = createSlice({
  name: "createCard",
  initialState,
  reducers: {
    addCard: (state) => {
      const newCard: Card = {
        PARENT_ID: uuidv4(),
        editable: true,
        CARD_NAME: "",
        tasks: [],
      };
      state.cards.push(newCard);
    },
    
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter(
        (card) => card.PARENT_ID !== action.payload
      );
    },
     modifyCard: (state, action: PayloadAction<Card>) => {
      state.cards = state.cards.map((card) => {
        if (card.PARENT_ID === action.payload.PARENT_ID) {
          return action.payload;
        }
        return card;
      });
    },
      addTaskToCard: (state, action: PayloadAction<{ PARENT_ID: string; TASK_NAME: string }>) => {
            const card = state.cards.find(card => card.PARENT_ID === action.payload.PARENT_ID);
            if (card) {
                card.tasks?.push({
                    TASK_ID: uuidv4(),
                    TASK_NAME: action.payload.TASK_NAME,
                    PARENT_ID: card.PARENT_ID,
                    editable: false, 
                });
            }
    },
    modifyTaskfromCard: (state, action: PayloadAction<Task>) => {
      const card = state.cards.find(card => card.PARENT_ID === action.payload.PARENT_ID);
      if (card && card.tasks) {
        card.tasks = card.tasks.map((task) => {
          if (task.TASK_ID === action.payload.TASK_ID) {
            return action.payload;
          }
          return task;
        });
      }
    },
    deleteTaskfromCard: (state, action: PayloadAction<{ PARENT_ID: string, TASK_ID: string }>) => {
      
      const card = state.cards.find(card => card.PARENT_ID === action.payload.PARENT_ID);
      if (card && card.tasks) {
        card.tasks = card.tasks.filter((task) => task.TASK_ID !== action.payload.TASK_ID);
        
      }
    },
  
  
  },
});

export const { addCard, deleteCard, modifyCard, addTaskToCard,modifyTaskfromCard,deleteTaskfromCard } = createCardSlice.actions;
export default createCardSlice.reducer;
