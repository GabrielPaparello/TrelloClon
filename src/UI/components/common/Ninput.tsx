import React from "react";
import { Props } from "./Form";

export const Input = ({ formValues, handleChange }: Props) => {
  return (
    {formValues.entries().map((element: string) => (
      
        <input
          required
          className="ring-1 ring-gray-500 rounded-md "
          type="text"
          name={element}
          id={element}
          onChange={handleChange}
          value={formValues.projectName}
        />
    ))} 
  );
};
