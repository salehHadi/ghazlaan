import React from "react";
import youtube from "../../assets/youtube.svg";
import x from "../../assets/x-twitter.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import snapchat from "../../assets/snapchat.svg";
import { Box, styled, Typography } from "@mui/material";

const FlexContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
}));

const EmailText = styled(Typography)(() => ({
  fontSize: "20px",
}));

export default function Footer() {
  return (
    <FlexContainer pb={4}>
      <FlexContainer>
        <EmailText>gmail@gmail.com</EmailText>
      </FlexContainer>

      <FlexContainer justifyContent={"end"} gap={1}>
        <img src={youtube} alt="youtube" style={{ width: "30px" }} />
        <img src={x} alt="x" style={{ width: "30px" }} />
        <img src={instagram} alt="instagram" style={{ width: "30px" }} />
        <img src={facebook} alt="facebook" style={{ width: "30px" }} />
        <img src={snapchat} alt="snapchat" style={{ width: "30px" }} />
      </FlexContainer>
    </FlexContainer>
  );
}
