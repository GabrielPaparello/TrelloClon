/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNav } from "./Mobile";
import { DesktopNav } from "./Desktop";

const Homenav = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <DesktopNav path={path} />
      <MobileNav open={open} setOpen={setOpen} path={path} />
    </>
  );
};

export default Homenav;
