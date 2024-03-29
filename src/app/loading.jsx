"use client";
import React from "react";
import GridLoader from "react-spinners/GridLoader";
import styles from "./loading.module.css";
const loading = () => {
  return (
    <main className={styles.main}>
      <GridLoader color="#00224D" />
    </main>
  );
};

export default loading;
