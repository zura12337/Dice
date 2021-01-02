import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Stats() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <CSSTransition
        in={!open}
        unmountOnExit
        timeout={200}
        classNames="statistics"
      >
        <button
          onClick={toggleOpen}
          style={{ cursor: "pointer" }}
          className="statistics"
        >
          Stats
        </button>
      </CSSTransition>
      <CSSTransition
        in={open}
        unmountOnExit
        timeout={300}
        classNames="statistics"
      >
        <div className="statistics">
          <div className="stats-inner">
            <button onClick={toggleOpen} className="close-statistics">
              X
            </button>
          </div>
          <p>wins: 1</p>
          <p>losses: 0</p>
          <p>draws: 0</p>
        </div>
      </CSSTransition>
    </>
  );
}
