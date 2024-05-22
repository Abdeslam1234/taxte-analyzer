import React from "react";

export default function Footer() {
  return (
    <div>
      <footer
        style={{
          background: "#f1f7ff",
          borderTop: "1px solid rgba(0, 0, 0, .06)",
          padding: "19px 0",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <h4>Build by Abdul Basit</h4>
        <div
          style={{
            color: "#242424",
            cursor: "pointer",
            fontSize: "16px",
            display: "flex",
            gap:"20px"
          }}
        >
          <p>About Us</p>|
          <p>Contact Us</p>
        </div>
      </footer>
    </div>
  );
}
