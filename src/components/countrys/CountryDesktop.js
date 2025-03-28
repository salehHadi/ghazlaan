import React from "react";
import { SectionName } from "../../styles/generalStyle";
import flag1 from "../../assets/country1.png";
import flag2 from "../../assets/country2.png";
import flag3 from "../../assets/country3.png";
import flag4 from "../../assets/country4.png";
import flag5 from "../../assets/country5.png";
import flag6 from "../../assets/country6.png";
import arrowLeft from "../../assets/arrowLeft.svg";
import { Box, styled, Typography } from "@mui/material";

const CountryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
}));

const Line = styled(Box)(() => ({
  backgroundColor: "black",
  width: "70%",
  height: "1px",
}));

const Title = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  fontSize: "20px",
  fontWeight: 500,
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  fontSize: "12px",
  backgroundColor: "white",
  padding: "4px 8px",
}));

export default function CountryDesktop() {
  const countrysArr = [
    {
      name: "الهند",
      backgroundColor: "#F5E1C9",
    },
    {
      name: "الهند",
      flag: flag1,
      backgroundColor: "#F5E1C9",
    },
    {
      name: "بـنـجـلاديـش",
      flag: flag2,
      backgroundColor: "#F8D1D6",
    },
    {
      name: "الفلبين",
      flag: flag3,
      backgroundColor: "#CED8ED",
    },
    {
      name: "اثيوبيا",
      flag: flag4,
      backgroundColor: "#CCE6D7",
    },
    {
      name: "اوغندا",
      flag: flag5,
      backgroundColor: "#FFFED3",
    },
    {
      name: "بـنـجـلاديـش",
      flag: flag6,
      backgroundColor: "#CDD8CD",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SectionName>
          اخـتـر عـمـالـتـك <br />
          الـمـنـزلـيـة الأن
        </SectionName>

        <p>
          يمكنك مشاهد العمالة المتوفر <br />
          بالضغط على الصورة
        </p>
      </div>

      <CountryContainer>
        <img src={flag1} alt="India" />
        <Line />
        <Title variant="h1">الهند</Title>

        <ButtonContainer>
          <button>معلومات اكثر</button>
          <img src={arrowLeft} alt="arrowLeft" />
        </ButtonContainer>
      </CountryContainer>
    </div>
  );
}
