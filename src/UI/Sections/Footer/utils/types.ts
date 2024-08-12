import { ComponentType } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

export interface footerLinksType {
  title: string;
  path: string;
  description: string;
}

export interface socialIconsType {
  icon: ComponentType<SvgIconProps>;
  path: string;
}
export interface socialLinksType {
  title: string;
  path: string;
  icon: ComponentType<SvgIconProps>;
}

export interface policyType {
  title: string;
  path: string;
}
