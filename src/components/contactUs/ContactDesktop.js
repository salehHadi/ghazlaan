import React from "react";
import whatsapp from "../../assets/whatsapp.svg";
import location from "../../assets/location.png";
import { Box, styled, Typography } from "@mui/material";
import { SectionName } from "../../styles/generalStyle";

const CenterFlex = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));
const Line = styled(Box)(() => ({
  width: "1px",
  height: "100px",
  backgroundColor: "black",
}));

const WhatsappBTN = styled("button")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  border: "1px solid rgba(57, 174, 65, 1)",
  padding: "8px",
  borderRadius: "4px",
  backgroundColor: "white",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "rgba(57, 174, 65, 0.1)",
  },
}));
const Title = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: 500,
}));

export default function ContactDesktop() {
  return (
    <CenterFlex gap={"40px"} flexDirection={"column"} alignItems={"center"}>
      <SectionName>تواصل معنا</SectionName>
      <CenterFlex width={"100%"} gap={"40px"} alignItems={"start"}>
        <CenterFlex flexDirection={"column"} gap={"16px"}>
          <Title variant="h3">تواصل عن طريق</Title>
          <WhatsappBTN>
            <p>الواتس اب</p>
            <img src={whatsapp} alt="whatsapp" />
          </WhatsappBTN>
        </CenterFlex>
        <Line />
        <CenterFlex flexDirection={"column"} gap={"16px"}>
          <Title variant="h3">اتصال مباشر</Title>
          <p>+966 59 595 9595</p>
        </CenterFlex>
      </CenterFlex>

      <div>
        <a href="#">
          <img src={location} alt="location" />
        </a>
      </div>

      <CenterFlex gap={"10px"} flexDirection={"column"} alignItems={"center"}>
        <h4>ساعات العمل</h4>
        <h5>من السبت الي الخميس</h5>
        <p>من الساعه 8 صباحا الي 12 ظهرا</p>
        <p>ومن الساعة 4 عصرا الي 10 مساءا</p>
      </CenterFlex>
    </CenterFlex>
  );
}
