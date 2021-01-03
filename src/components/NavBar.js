import React from "react";
import logo from "../assets/white-theme/Logo.svg";

export default function NavBar() {
  return (
    <div className="navbar">
      <img onClick={() => window.location.reload()} src={logo} alt={"logo"} />
    </div>
  );
}
