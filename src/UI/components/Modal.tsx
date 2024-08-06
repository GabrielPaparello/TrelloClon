import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100 p-4 text-center ring-2 ring-gray-300">
      {children}
    </div>
  );
};
