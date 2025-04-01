import React, { useState } from "react";
import logo from "../../assets/logo.png";
import arrowDown from "../../assets/arrowDown.svg";
import { Box, styled } from "@mui/material";

const BTN = styled("button")(() => ({
  border: "none",
  backgroundColor: "lightgray",
  width: "100%",
  fontSize: "12px",
  textAlign: "start",
  padding: "12px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "gray",
  },
}));

export default function Header() {
  const [isVisibale, setIsVisibale] = useState(false);
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
        <button
          style={{
            padding: "12px",
            borderRadius: "32px",
            backgroundColor: "#13B4E9",
            width: "fit-content",
            color: "white",
            fontWeight: 400,
            fontSize: "18px",
            border: "none",
            borderBottom: "4px solid #005596",
            borderRight: "3px solid #005596",
            cursor: "pointer",
          }}
        >
          تواصل معنا
        </button>
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
        <p style={{ cursor: "pointer" }}>الرئيسية</p>
        <div
          style={{ position: "relative", cursor: "pointer" }}
          onMouseEnter={() => setIsVisibale(true)}
          onMouseLeave={() => setIsVisibale(false)}
        >
          <p>
            العمالة المنزلية
            <span>
              <img
                src={arrowDown}
                alt="arrowDown"
                style={{ marginRight: "6px" }}
              />
            </span>
          </p>
          {isVisibale && (
            <div
              onMouseEnter={() => setIsVisibale(true)}
              // onMouseLeave={() => setIsVisibale(false)}
              style={{
                position: "absolute",
                bottom: -320,
                right: 0,
                display: "inline-block",
                zIndex: 1,
                borderRadius: "8px",
              }}
            >
              <BTN>الفلبين</BTN>
              <BTN>بـنـجـلاديـش</BTN>
              <BTN>الهند</BTN>
              <BTN>اوغندا</BTN>
              <BTN>اثيوبيا</BTN>
              <BTN>سيريلانكا</BTN>
              <BTN>باكيستان</BTN>
              <BTN>كينيا</BTN>
            </div>
          )}
        </div>
        <p style={{ cursor: "pointer" }}>خدماتنا</p>
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
