import React from "react";
import one from "../assets/white-theme/dice-faces/one.svg";
import two from "../assets/white-theme/dice-faces/two.svg";
import three from "../assets/white-theme/dice-faces/three.svg";
import four from "../assets/white-theme/dice-faces/four.svg";
import five from "../assets/white-theme/dice-faces/five.svg";
import six from "../assets/white-theme/dice-faces/six.svg";

const numberToDice = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
};

export default function Dice({ number }) {
  return (
    <div className="dice">
      <img src={numberToDice[number]} alt="dice" className="dice-img" />
    </div>
  );
}
