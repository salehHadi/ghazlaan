import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { SectionName } from "../../styles/generalStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Index() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const newsArr = [
    "اصدرة الحكومة السعودية بيان بشان العمالة الوافدة",
    " الجوازات السعودية: إعفاء من رسوم العمالة الفردية والشركات الصغيرة",
    "اصدرة الحكومة السعودية بيان بشان العمالة الوافدة",
    " الجوازات السعودية: إعفاء من رسوم العمالة الفردية والشركات الصغيرة",
  ];
  return (
    <div
      style={{
        width: "100%",
        boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <SectionName variant="h2" mb={1}>
        احدث الاخبار ..
      </SectionName>

      <div
        style={{
          width: "100%",
          backgroundColor: "#F74343",
          color: "white",
          padding: "10px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "scroll 35s linear infinite",
            minWidth: "100%",
          }}
        >
          {newsArr.map((headline, index) => (
            <span
              key={index}
              style={{
                marginRight: "12px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {headline} •
            </span>
          ))}
        </div>
        <style>
          {`
          @keyframes scroll {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(100%);
            }
          }
        `}
        </style>
      </div>
    </div>
  );
}
