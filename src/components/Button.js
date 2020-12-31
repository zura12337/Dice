import React from "react";

export default function Button({ title, onClick, icon, ...style }) {
  return (
    <button {...style} className="btn btn-primary" onClick={onClick}>
      {icon && icon}
      {title}
    </button>
  );
}
