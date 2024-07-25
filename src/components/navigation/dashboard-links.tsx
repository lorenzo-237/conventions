import type { NavigationLinkGroups } from "./navigation.type";
import { FileSpreadsheet, Settings, Activity } from "lucide-react";

export const DASHBOARD_LINKS: NavigationLinkGroups[] = [
  {
    links: [
      {
        title: "Conventions",
        icon: <FileSpreadsheet />,
        url: "/",
      },
      {
        title: "Paramètres",
        icon: <Settings />,
        url: "/settings",
      },
    ],
  },
  {
    title: "Autre",
    links: [
      {
        title: "Test",
        icon: <Activity />,
        url: "/tests",
      },
    ],
  },
];
