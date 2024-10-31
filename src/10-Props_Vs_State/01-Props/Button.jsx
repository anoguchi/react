import React from "react";

import "./App.css";
import styles from "./Button.module.css";

function Button({ variant, children }) {
  return (
    <button className={`${styles.wrapper} ${styles[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
