import { useEffect, useState } from "react";

export const usePageTitle = (path: string) => {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    if (path === "/testproject") {
      setTitle("Create Project");
    } else {
      setTitle("null");
    }
  }, [path]);

  return title;
};
