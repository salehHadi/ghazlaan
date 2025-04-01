import React, { useState } from "react";
import { SectionName } from "../../styles/generalStyle";
import flag1 from "../../assets/country1.png";
import flag2 from "../../assets/country2.png";
import flag3 from "../../assets/country3.png";
import flag4 from "../../assets/country4.png";
import flag5 from "../../assets/country5.png";
import flag6 from "../../assets/country6.png";
import flag7 from "../../assets/country7.png";
import flag8 from "../../assets/country8.png";
import arrowLeft from "../../assets/arrowLeft.svg";
import start from "../../assets/start.svg";
import { Box, styled, Typography } from "@mui/material";

const CountryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "24px",
  marginBottom: "24px",
}));

const CountryDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "16px",
  padding: "32px",
}));

const CountryFlag = styled("img")(() => ({
  width: "170px",
  height: "170px",
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

const ButtonContainer = styled("button")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: 500,
  backgroundColor: "white",
  padding: "6px",
  cursor: "pointer",
  border: "none",
  gap: "6px",
  ":hover": {
    backgroundColor: "#EFEFEF",
  },
}));

const WatchMoreBTN = styled("button")(({ theme }) => ({
  backgroundColor: "#F7F7F7",
  padding: "8px 12px",
  border: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#EFEFEF",
  },
}));

export default function CountryDesktop() {
  const [isVisibale, setIsVisibale] = useState(false);
  return (
    <div>
      <div
        style={{
          marginBottom: "40px",
          padding: "0 24px",
        }}
      >
        <SectionName>اخـتـر عـمـالـتـك الـمـنـزلـيـة الأن</SectionName>

        <p>
          يمكنك مشاهد العمالة المتوفر <br />
          بالضغط على الصورة
        </p>
      </div>
      <CountryContainer>
        <CountryDiv backgroundColor={"#F5E1C9"} borderRadius={"70px 0 70px 0"}>
          <CountryFlag src={flag1} alt="India" />
          <Line />
          <Title variant="h1">الهند</Title>

          <ButtonContainer>
            معلومات اكثر
            <img src={arrowLeft} alt="arrowLeft" />
          </ButtonContainer>
        </CountryDiv>

        <CountryDiv
          backgroundColor={"#F8D1D6"}
          borderRadius={"0px 70px 0px 70px"}
        >
          <CountryFlag src={flag2} alt="India" />
          <Line />
          <Title variant="h1">بـنـجـلاديـش</Title>

          <ButtonContainer>
            معلومات اكثر
            <img src={arrowLeft} alt="arrowLeft" />
          </ButtonContainer>
        </CountryDiv>

        <CountryDiv
          backgroundColor={"#CED8ED"}
          borderRadius={"70px 0 70px 0"}
          position={"relative"}
        >
          <CountryFlag src={flag3} alt="India" />
          <Line />
          <Title variant="h1">الفلبين</Title>

          <ButtonContainer>
            معلومات اكثر
            <img src={arrowLeft} alt="arrowLeft" />
          </ButtonContainer>
          <img
            src={start}
            alt="star"
            style={{
              bottom: "-8%",
              right: "-15%",
              position: "absolute",
              width: "35px",
            }}
          />
        </CountryDiv>
      </CountryContainer>

      <CountryContainer>
        <CountryDiv
          backgroundColor={"#CCE6D7"}
          borderRadius={"0px 70px 0px 70px"}
        >
          <CountryFlag src={flag4} alt="India" />
          <Line />
          <Title variant="h1">اثيوبيا</Title>

          <ButtonContainer>
            معلومات اكثر
            <img src={arrowLeft} alt="arrowLeft" />
          </ButtonContainer>
        </CountryDiv>

        <CountryDiv backgroundColor={"#FFFED3"} borderRadius={"70px 0 70px 0"}>
          <CountryFlag src={flag5} alt="India" />
          <Line />
          <Title variant="h1">اوغندا</Title>

          <ButtonContainer>
            معلومات اكثر
            <img src={arrowLeft} alt="arrowLeft" />
          </ButtonContainer>
        </CountryDiv>
        <CountryDiv
          backgroundColor={"#CDD8CD"}
          borderRadius={"0px 70px 0px 70px"}
        >
          <CountryFlag src={flag6} alt="India" />
          <Line />
          <Title variant="h1">كينيا</Title>

          <ButtonContainer>
            معلومات اكثر
            <img src={arrowLeft} alt="arrowLeft" />
          </ButtonContainer>
        </CountryDiv>
      </CountryContainer>

      {isVisibale && (
        <CountryContainer>
          <CountryDiv backgroundColor={"#CBD1CE"}>
            <CountryFlag src={flag7} alt="India" />
            <Line />
            <Title variant="h1">باكيستان</Title>

            <ButtonContainer>
              معلومات اكثر
              <img src={arrowLeft} alt="arrowLeft" />
            </ButtonContainer>
          </CountryDiv>

          <CountryDiv backgroundColor={"#EAD2A6"}>
            <CountryFlag src={flag8} alt="India" />
            <Line />
            <Title variant="h1">سيريلانكا</Title>

            <ButtonContainer>
              معلومات اكثر
              <img src={arrowLeft} alt="arrowLeft" />
            </ButtonContainer>
          </CountryDiv>
        </CountryContainer>
      )}

      {!isVisibale && (
        <CountryContainer onClick={() => setIsVisibale(true)}>
          <WatchMoreBTN>شاهد المزيد+</WatchMoreBTN>
        </CountryContainer>
      )}
    </div>
  );
}
