/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ButtonIcon from "../assets/white-theme/perspective-dice-six-faces-random.svg";
import Dice from "./Dice";
import Stats from "./Stats";
import useStatistics from "../hooks/useStatistics";

export default function Game() {
  const [userChoice, setUserChoice] = useState();
  const [AIChoice, setAIChoice] = useState();
  const [isStarted, setIsStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useStatistics([]);

  useEffect(() => {
    if (isStarted) {
      play();
    }
  }, [isStarted]);

  const play = () => {
    setLoading(true);
  };

  useEffect(() => {
    let userChoice;
    let AIChoice;
    if (loading) {
      const interval = setInterval(() => {
        userChoice = Math.floor(Math.random() * 6 + 1);
        AIChoice = Math.floor(Math.random() * 6 + 1);
        setAIChoice(AIChoice);
        setUserChoice(userChoice);
      }, 50);
      setTimeout(() => {
        setLoading(false);
        clearInterval(interval);
        userChoice = Math.floor(Math.random() * 6 + 1);
        AIChoice = Math.floor(Math.random() * 6 + 1);
        setUserChoice(userChoice);
        setAIChoice(AIChoice);
        const stat = {
          id: stats.length,
          status:
            userChoice > AIChoice
              ? "win"
              : userChoice === AIChoice
              ? "draw"
              : "lose",
        };
        setStats((stats) => [...stats, stat]);
      }, 1100);
    }
  }, [loading]);

  const handleStart = () => {
    setIsStarted(!isStarted);
  };

  return (
    <div className="game">
      <Stats stats={stats} />
      {!isStarted ? (
        <div>
          <h1>Play Dice Against AI</h1>
          <Button
            title={"Start"}
            icon={<img src={ButtonIcon} alt={"dice"} />}
            style={{
              marginTop: "20px",
            }}
            onClick={handleStart}
          />
        </div>
      ) : (
        <>
          <div className="answers">
            {loading ? (
              <>
                <h5>You: ?</h5>
                <h5>AI: ?</h5>
              </>
            ) : (
              <>
                <h5>You: {userChoice}</h5>
                <h5>AI: {AIChoice}</h5>
              </>
            )}
          </div>
          <div className="choices">
            <Dice number={userChoice} />
            {loading ? (
              <div className="answer">???</div>
            ) : (
              <div
                className={`answer ${
                  userChoice > AIChoice
                    ? "win"
                    : userChoice === AIChoice
                    ? "draw"
                    : "defeat"
                }`}
              >
                {userChoice > AIChoice
                  ? "You Win!"
                  : userChoice === AIChoice
                  ? "Draw"
                  : "You Lose"}
              </div>
            )}
            <Dice number={AIChoice} />
          </div>
          <div className="restart">
            <Button title="Play Again" onClick={play} />
          </div>
        </>
      )}
    </div>
  );
}
