import React from "react";
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

export default function Dice({ number }) {
  return (
    <div className="dice">
      <img src={numberToDice[number]} alt="dice" className="dice-img" />
    </div>
  );
}
