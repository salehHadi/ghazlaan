import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import OurServiceDesktop from "./ourServiceDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={{ width: "100%" }}>
      {matches ? "hj" : <OurServiceDesktop />}
    </div>
  );
}
