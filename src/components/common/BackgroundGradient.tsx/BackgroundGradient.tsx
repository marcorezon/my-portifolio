"use client";
import React from "react";
import styles from "./BackgroundGradient.module.css";

export function BackgroundGradient() {
  return (
    <div className={styles.container}>
      <div className={`${styles.circle} ${styles.up}`} style={{"--i": 6} as React.CSSProperties}></div>
      <div className={`${styles.circle} ${styles.down}`} style={{"--i": 5} as React.CSSProperties}></div>
      <div className={`${styles.circle} ${styles.left}`} style={{"--i": 3} as React.CSSProperties}></div>
    </div>
  );
}
