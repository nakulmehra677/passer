import React from "react";
import style from "./style.module.css";

export default function Input({ label, error, ...props }) {
  return (
    <div>
      {label && <p className={style.label}>{label}</p>}
      <input {...props} className={style.input} />
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}
