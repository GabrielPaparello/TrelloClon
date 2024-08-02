// "use client";

// import React, { useEffect, useState } from "react";
// import Cards from "../../components/Cards";
// import { useAppDispatch } from "../../lib/store";
// import {
//   addCard,
//   loadData,
//   saveData,
//   Card,
// } from "../../lib/StatesReducers/createCard";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from "react-redux";
// import { cardEdit } from "../../lib/ReducersSelector/selector";
// import { useUser } from "@auth0/nextjs-auth0/client";
// import { v4 as uuid } from "uuid";
// import { ToastContainer } from "react-toastify";
// import { setToast } from "../../lib/StatesReducers/toast";
// import { useParams } from "next/navigation";
// // import { useSearchParams } from "next/navigation";
// const Project = () => {
//   const params = useParams();
//   const { userID, projectId } = params;
//   // const searchParams = useSearchParams();
//   // const userID = searchParams.get("userID");
//   // const projectId = searchParams.get("projectId");
//   const { user } = useUser();
//   const user_id = user?.sub?.split("|")[1];
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     console.log("RENDERINGEFFECT");
//     console.log(userID, projectId, "MYQUERYPARAMS");
//   }, []);

//   // useEffect(() => {
//   //   dispatch(loadData(user_id));
//   // }, [user_id, dispatch]);
//   useEffect(() => {
//     if (user_id) {
//       dispatch(loadData(user_id));
//     }
//   }, [user_id, dispatch]);

//   const cards = useSelector(cardEdit);
//   const toastState = useSelector((state: any) => state.toastState.toast);
//   const handleSave = (user_id: string | undefined, cards: Card[]) => {
//     dispatch(saveData({ user_id, cards }));
//     alert("saved");
//   };
//   useEffect(() => {
//     if (toastState === true) {
//       console.log("toastState", toastState);
//       toast("Project Saved");
//       dispatch(setToast(false));
//     }
//   }, [toastState]);
//   return (
//     <>
//       <h1 className="text-black text-6xl">
//         `${projectId}${userID}`
//       </h1>
//       <main className="">
//         <div className="flex flex-wrap gap-4 p-4">
//           <button
//             onClick={() => dispatch(addCard())}
//             className="text-[#0079d3] font-bold pb-2 px-6 rounded"
//           >
//             + Add Card
//           </button>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
//             {cards && cards.map((card) => <Cards key={uuid()} card={card} />)}
//           </div>
//         </div>
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//       </main>
//     </>
//   );
// };

// export default Project;
