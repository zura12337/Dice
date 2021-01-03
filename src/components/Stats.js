import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { CgClose } from "react-icons/cg";

export default function Stats({ stats }) {
  const [open, setOpen] = useState(false);
  const [wins, setWins] = useState();
  const [draws, setDraws] = useState();
  const [losses, setLosses] = useState();

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let wins = [];
    let draws = [];
    let losses = [];
    stats.map((stat) => {
      console.log(stat);
      if (stat.status === "win") {
        wins.push(stat);
      } else if (stat.status === "draw") {
        draws.push(stat);
      } else {
        losses.push(stat);
      }
    });
    setWins(wins);
    setDraws(draws);
    setLosses(losses);
  }, [stats]);

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
          style={{ cursor: "pointer", textAlign: "center", fontWeight: "bold" }}
          className="statistics"
        >
          Show Statistics
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
              <CgClose />
            </button>
          </div>
          <p>wins: {wins && wins.length}</p>
          <p>draws: {draws && draws.length}</p>
          <p>losses: {losses && losses.length}</p>
        </div>
      </CSSTransition>
    </>
  );
}
