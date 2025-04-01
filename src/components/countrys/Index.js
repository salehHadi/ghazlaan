import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import React from "react";
import CountryDesktop from "./CountryDesktop";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="countrys" style={{ width: "100%" }}>
      {matches ? "hj" : <CountryDesktop />}
    </div>
  );
}
