import React, { ComponentType } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { SvgIconProps } from "@mui/material/SvgIcon";
interface ILink {
  id: string;
  name: string;
  path: string;
  icon: ComponentType<SvgIconProps>;
}

interface MyComponentProps {
  className?: string;
}

const links: ILink[] = [
  {
    id: "home",
    name: "home",
    path: "/",
    icon: HomeIcon,
  },
  {
    id: "learn",
    name: "Learn",
    path: "/learnBoardStack",
    icon: MenuBookIcon,
  },
  {
    id: "projects",
    name: "Try it",
    path: "/testproject",
    icon: CreateNewFolderIcon,
  },
];

export default links;
