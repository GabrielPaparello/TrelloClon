/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNav } from "./Mobile";
import { DesktopNav } from "./Desktop";
import { usePageTitle } from "@/lib/hooks/pageTitle";

const Homenav = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const title = usePageTitle(path);
  return (
    <>
      <DesktopNav path={path} title={title} />
      <MobileNav open={open} title={title} setOpen={setOpen} path={path} />
    </>
  );
};

export default Homenav;
