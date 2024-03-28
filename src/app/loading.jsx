"use client";
import React from "react";
import GridLoader from "react-spinners/GridLoader";
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
      <GridLoader color="#00224D" />
    </div>
  );
};

export default loading;
