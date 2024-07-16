export interface Card {
  PARENT_ID: string;
  editable: boolean;
  CARD_NAME: string;
  tasks?: Task[];
}

export interface Task {
  TASK_ID: string;
  TASK_NAME: string;
  PARENT_ID: string;
  editable: boolean;
  detailOpen: boolean;
  Details: {
    description: string;
    DueDate: string;
    Priority: string;
    status: string;
    checklist?: string[];
  };
}
export interface CardState {
  cards: Card[];
}
