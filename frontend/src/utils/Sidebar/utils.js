import generateUUID from "../../helper/uuid";
import availableRoutes from "../routes/availableRoutes";
export const sidebarItems = [
  {
    id: generateUUID("sidebarItems"),
    to: availableRoutes.home,
    fontAwesomeIconClass: "fa-solid fa-house m-2",
    buttonLabel: "Home",
  },
  {
    id: generateUUID("sidebarItems"),
    fontAwesomeIconClass: "fa-solid fa-fire m-2",
    to: availableRoutes.trending,
    buttonLabel: "Trending",
  },
  {
    id: generateUUID("sidebarItems"),
    fontAwesomeIconClass: "fa-solid fa-circle-plus m-2",
    to: availableRoutes.create,
    buttonLabel: "Create",
  },
  {
    id: generateUUID("sidebarItems"),
    fontAwesomeIconClass: "fa-solid fa-play m-2",
    to: availableRoutes.pints,
    buttonLabel: "Pints",
  },
];
