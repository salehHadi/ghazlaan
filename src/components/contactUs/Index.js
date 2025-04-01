import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import ContactDesktop from "./ContactDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="contact-us" style={{ width: "100%", paddingBottom: "80px" }}>
      {matches ? "hj" : <ContactDesktop />}
    </div>
  );
}
