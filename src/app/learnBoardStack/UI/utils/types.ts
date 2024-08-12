import { ComponentType } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

export interface HeaderText {
  title: string;
  subtitle: string;
  paragraph: string;
  image: string;
  altImage: string;
  classNameEffect?: string;
}

export interface SectionOne {
  title: string;
  classNameEffect?: string;
  image: string;
  altImage: string;
}

export interface SectionTwo {
  title: string;
  paragraph: string;
  androidIcon: ComponentType<SvgIconProps>;
  appleIcon: ComponentType<SvgIconProps>;
  image: string;
  altImage: string;
  paragraphTwo: string;
}
