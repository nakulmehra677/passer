import React from "react";
import style from "./style.module.css";

export default function Select({ label, options, error, ...props }) {
  return (
    <div>
      {label && <p className={style.label}>{label}</p>}
      <select {...props} className={style.select}>
        {options.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <p className={style.error}>{error}</p>}
    </div>
  );
}
