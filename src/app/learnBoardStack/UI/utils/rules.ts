import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { HeaderText, SectionOne, SectionTwo } from "./types";

export const HeaderSectionText: HeaderText = {
  title: "What is a Kanban Board",
  subtitle: "We got too start like everything with the basics.",
  paragraph: `A Kanban board is an agile project management tool
    designed to help visualize work, limit work in progress, and
    maximize efficiency (or flow). It can assist both agile teams and
    DevOps teams in defining the order of their daily tasks.`,
  image: "/assets/blog/kanbanExample.png",
  altImage: "Example of a kanban board and its elements.",
};
export const MainSectionTextOne: SectionOne = {
  title: "What BoardStack offers",
  image: "/assets/blog/kanbanExample.png",
  altImage: "Another example of what BoardStack offers in a kanban",
};

export const MainSectionTextTwo: SectionTwo = {
  title: "What Else",
  paragraph: `Our app includes a login feature with convenient options like
  Google, or you can register manually. Currently, its designed
  for managing a single project at a time, as it serves primarily
  as a portfolio piece.`,
  paragraphTwo: `However, you can save and reload your current project whenever
  needed. Currently available on the web, we are actively
  developing the mobile app for Android and iOS platforms.`,
  androidIcon: AndroidIcon,
  appleIcon: AppleIcon,
  image: "/assets/blog/kanbanExample.png",
  altImage: "Another Kanban Example",
};
