import React from "react";
import styles from "./styles.module.scss";
import Header from "../Header";

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      {children}
    </div>
  );
};

export default Main;
