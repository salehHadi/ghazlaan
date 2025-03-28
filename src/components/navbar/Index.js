import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import HeaderDesktop from "./HeaderDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ width: "100%" }}>{matches ? "hj" : <HeaderDesktop />}</div>
  );
}
