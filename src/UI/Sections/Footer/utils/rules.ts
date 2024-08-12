import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { footerLinksType, policyType, socialLinksType } from "./types";

export const footerLinks: footerLinksType[] = [
  {
    title: "About Us",
    path: "/about",
    description: "Where did this come from?",
  },
  {
    title: "Other Works",
    path: "#git",
    description: "Check out my other work",
  },
  {
    title: "Contact",
    path: "/contact",
    description: "Contact me for jobs",
  },
];

export const socialLinks: socialLinksType[] = [
  {
    title: "LinkedIn",
    path: "#linkedin",
    icon: LinkedInIcon,
  },
  {
    title: "GitHub",
    path: "#github",
    icon: GitHubIcon,
  },
  {
    title: "Email",
    path: "#mail",
    icon: EmailIcon,
  },
  {
    title: "YouTube",
    icon: YouTubeIcon,
    path: "#",
  },
  {
    title: "X",
    icon: XIcon,
    path: "#",
  },
];

export const policy: policyType[] = [
  {
    title: "Privacy Policy",
    path: "#",
  },
  {
    title: "Terms and Conditions",
    path: "#",
  },
  {
    title: "Copyright © " + new Date().getFullYear() + " - All Rights Reserved",
    path: "#",
  },
];
