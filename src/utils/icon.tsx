import React from "react";
import { Code, Cloud, Devices, Work, Groups } from "@mui/icons-material";

export const iconMapper: { [key: string]: React.ReactNode } = {
  cloud: <Cloud sx={{ fontSize: 40 }} />,
  devices: <Devices sx={{ fontSize: 40 }} />,
  code: <Code sx={{ fontSize: 40 }} />,
  work: <Work sx={{ fontSize: 40 }} />,
  groups: <Groups sx={{ fontSize: 40 }} />,
};
