"use client";
import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
const loading = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 140.7813px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PulseLoader color="#00224D" />
    </div>
  );
};

export default loading;
