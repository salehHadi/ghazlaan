import React from "react";
import heroImage from "../../assets/heroImage1.png";
import show from "../../assets/show.svg";
import line1 from "../../assets/line1.svg";
import line2 from "../../assets/line2.svg";

export default function HeroSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ maxWidth: "458px", textAlign: "center" }}>
          أفضل العاملات المنزلية الملائمة لاحتياجاتك وظروفك
        </h1>
        <img
          src={line1}
          alt="emoji"
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "40px",
            width: "100%",
            backgroundColor: "#B2D3EC",
            borderRadius: "0 150px 0 150px ",
            position: "relative",
          }}
        >
          <img
            src={line2}
            alt="emoji"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
          <div
            style={{
              width: "70%",
              fontSize: "24px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              borderBottom: "1px solid white",
            }}
          >
            <p
              style={{
                fontFamily: '"RocknRoll One", sans-serif',
              }}
            >
              5+سنوات
              <br />
              من الخبرة
            </p>
            <p style={{ fontWeight: "500" }}>
              +100
              <br />
              عميل سعيد
            </p>
          </div>

          <p style={{ width: "70%", fontSize: "16px", fontWeight: 500 }}>
            تلبية حاجة العملاء من العمالة المدربة والمختارة بعناية وفي وقت قياسي
          </p>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <p>
                شاهد العاملات <br />
                المتوفرة فورا
              </p>
              <img src={show} alt="show" />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: "34px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <p>تواصل معنا</p>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "150px 0 150px 0",
            position: "relative",
          }}
        >
          <img
            src={heroImage}
            alt="heroImage"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
