"use client";
import React, { useEffect } from "react";
import Cards from "../../../../UI/components/Cards";
import { useAppDispatch } from "../../../../lib/store";
import {
  addCard,
  loadData,
  saveData,
  CardType,
} from "../../../../lib/StatesReducers/createCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { cardEdit } from "../../../../lib/ReducersSelector/selector";
import { useUser } from "@auth0/nextjs-auth0/client";
import { v4 as uuid } from "uuid";
import { ToastContainer } from "react-toastify";
import { setToast } from "../../../../lib/StatesReducers/toast";
import { useParams } from "next/navigation";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { moveCardBetweenColumns } from "../../../../lib/StatesReducers/createCard";

const Project = () => {
  const params = useParams();
  const projectId = params.projectId as string;
  const { user } = useUser();
  const user_id = user?.sub?.split("|")[1];
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user_id) {
      dispatch(loadData({ user_id, projectId }));
    }
  }, [user_id, dispatch]);

  const cards = useSelector(cardEdit);
  const projectState = useSelector(
    (state: any) => state.createProject.projects
  );
  const toastState = useSelector((state: any) => state.toastState.toast);

  useEffect(() => {
    if (toastState === true) {
      console.log("toastState", toastState);
      toast("Project Saved");
      dispatch(setToast(false));
    }
  }, [toastState]);

  useEffect(() => {
    dispatch(saveData({ user_id, projectId, cards }));
  }, [cards]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // Si se suelta fuera de cualquier lista
    if (!destination) {
      return;
    }

    // Si se reordenan las tareas dentro de la misma tarjeta
    if (source.droppableId === destination.droppableId) {
      dispatch(
        moveCardBetweenColumns({
          sourceParentId: source.droppableId,
          destinationParentId: destination.droppableId,
          taskId: draggableId,
          destinationIndex: destination.index,
        })
      );
    }
  };

  const handleAddCard = () => {
    dispatch(addCard(projectId));
  };

  return (
    <>
      <ToastContainer />
      <DragDropContext onDragEnd={onDragEnd}>
        <Cards onAddCard={handleAddCard} />
      </DragDropContext>
    </>
  );
};

export default Project;
