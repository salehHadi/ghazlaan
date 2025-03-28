import React from "react";
import { SectionName } from "../../styles/generalStyle";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import Ellipse1 from "../../assets/Ellipse1.svg";
import { Box, styled, Typography } from "@mui/material";

const ServiceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "4px",
  height: "100%",
}));

const ItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  height: "100%",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "500",
  textAlign: "center",
}));
const Description = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "400",
  textAlign: "center",
}));

export default function OurServiceDesktop() {
  return (
    <div
      style={{
        boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.3)",
        position: "relative",
        padding: "0 0 16px 0 ",
      }}
    >
      <SectionName variant="h2" mb={4} mt={10}>
        الخدمات الإضافية ..
      </SectionName>

      <img
        src={Ellipse1}
        alt="Ellipse1"
        style={{
          position: "absolute",
          top: -40,
          left: 50,
        }}
      />
      <ServiceContainer>
        <ItemContainer>
          <img src={icon1} alt="icon1" />
          <Title>الـضـمـان</Title>
          <Description variant="h3">
            ضمان استمرارية العمالة طوال فترة العقد بالعمل وفق الشروط المتفق
            عليها حتى انتهاء مدة العقد.
          </Description>
        </ItemContainer>
        <ItemContainer>
          <img src={icon2} alt="icon1" />
          <Title>تجديد العقود</Title>
          <Description variant="h3">
            تجديد العقود من السفارات الاجنبية، بما يتوافق مع قوانين و متطلبات كل
            دولة{" "}
          </Description>
        </ItemContainer>
        <ItemContainer>
          <img src={icon3} alt="icon1" />
          <Title>الـتوصـيـل الـمـنـزلـي </Title>
          <Description variant="h3">
            استقبالها الخادمة من المطار وتوصيلها بأمان إلى المنزل، مع ضمان راحة
            وسلامة الوصول.
          </Description>
        </ItemContainer>
        <ItemContainer>
          <img src={icon4} alt="icon1" />
          <Title>خدمات الترجمه</Title>
          <Description variant="h3">
            خدمة الترجمة المجانية للأوراق ترجمة دقيقة وسريعة لمختلف المستندات
            والوثائق.
          </Description>
        </ItemContainer>
      </ServiceContainer>
    </div>
  );
}
