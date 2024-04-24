import React from "react";
import style from "./modal.module.css";

export default function Modal({ ui, isOpen, closeDialog }) {
  if (isOpen) {
    return (
      <div className={style["modal"]}>
        <div className={style["modal-content"]}>
          <span className={style["close"]} onClick={closeDialog}>
            &times;
          </span>
          <div>{ui}</div>
        </div>
      </div>
    );
  }

  return null;
}
