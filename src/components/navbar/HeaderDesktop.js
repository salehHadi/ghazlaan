import React from "react";
import logo from "../../assets/logo.png";
import arrowDown from "../../assets/arrowDown.svg";
import { Box } from "@mui/material";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingTop: "16px",
      }}
    >
      <Box
        sx={{
          width: "25%",
        }}
      >
        <p
          style={{
            padding: "12px",
            borderRadius: "32px",
            backgroundColor: "#13B4E9",
            width: "fit-content",
            color: "white",
            fontWeight: 400,
            fontSize: "20px",
            borderBottom: "4px solid #005596",
            borderRight: "3px solid #005596",
          }}
        >
          تواصل معنا
        </p>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        <p>الرئيسية</p>
        <p>
          العمالة المنزلية
          <span>
            <img src={arrowDown} alt="arrowDown" />
          </span>
        </p>
        <p>خدماتنا</p>
      </Box>

      <Box
        sx={{
          width: "25%",
          textAlign: "end",
        }}
      >
        <img src={logo} alt="logo" />
      </Box>
    </header>
  );
}
