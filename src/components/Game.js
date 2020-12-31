/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ButtonIcon from "../assets/perspective-dice-six-faces-random.svg";
import one from "../assets/dice-faces/one.svg";
import two from "../assets/dice-faces/two.svg";
import three from "../assets/dice-faces/three.svg";
import four from "../assets/dice-faces/four.svg";
import five from "../assets/dice-faces/five.svg";
import six from "../assets/dice-faces/six.svg";

const numberToDice = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
};

export default function Game() {
  const [userChoice, setUserChoice] = useState();
  const [AIChoice, setAIChoice] = useState();
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
      const userChoice = Math.floor(Math.random() * 6 + 1);
      const AIChoice = Math.floor(Math.random() * 6 + 1);
      setAIChoice(AIChoice);
      setUserChoice(userChoice);
    }
  }, [isStarted]);

  return (
    <div className="game">
      {!isStarted ? (
        <div>
          <h1>Play Dice Against AI</h1>
          <Button
            title={"Start"}
            icon={<img src={ButtonIcon} alt={"dice"} />}
            style={{
              marginTop: "20px",
            }}
            onClick={() => setIsStarted(!isStarted)}
          />
        </div>
      ) : (
        <div className="choices">
          <div className="dice">
            <img
              src={numberToDice[userChoice]}
              alt="dice"
              className="dice-img"
            />
          </div>
          <div className={`answer ${userChoice > AIChoice ? "win" : "defeat"}`}>
            {userChoice > AIChoice ? "You Win!" : "You Lose"}
          </div>
          <div className="dice">
            <img src={numberToDice[AIChoice]} alt="dice" className="dice-img" />
          </div>
        </div>
      )}
    </div>
  );
}
