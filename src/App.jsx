import { useState } from "react";
import "./App.css";
import DogIcon from "./DogIcon";
import dogOne from "/images/dog1.png";
import hoverDogOne from "/images/hoverdog1.png";
import dogTwo from "/images/dog2.png";
import hoverDogTwo from "/images/hoverdog2.png";
import dogThree from "/images/dog3.png";
import hoverDogThree from "/images/hoverdog3.png";
import dogFour from "/images/dog4.png";
import hoverDogFour from "/images/hoverdog4.png";
import dogFive from "/images/dog5.png";
import hoverDogFive from "/images/hoverdog5.png";
import dogSix from "/images/dog6.png";
import hoverDogSix from "/images/hoverdog6.png";
import dogSeven from "/images/dog7.png";
import hoverDogSeven from "/images/hoverdog7.png";
import dogEight from "/images/dog8.png";
import hoverDogEight from "/images/hoverdog8.png";
import dogNine from "/images/dog9.png";
import hoverDogNine from "/images/hoverdog9.png";
import dogZero from "/images/dog0.png";
import hoverDogZero from "/images/hoverdog0.png";
import dogClear from "/images/dogc.png";
import hoverDogClear from "/images/hoverdogc.png";
import dogDivide from "/images/dogd.png";
import hoverDogDivide from "/images/hoverdogd.png";
import dogEquals from "/images/doge.png";
import hoverDogEquals from "/images/hoverdoge.png";
import dogMinus from "/images/dogm.png";
import hoverDogMinus from "/images/hoverdogm.png";
import dogPlus from "/images/dogp.png";
import hoverDogPlus from "/images/hoverdogp.png";
import dogTimes from "/images/dogt.png";
import hoverDogTimes from "/images/hoverdogt.png";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [secondNumber, setSecondNumber] = useState(false);

  const handleButton = (value) => {
    if (/^\d$/.test(value)) {
      if (secondNumber) {
        setDisplay(value);
        setSecondNumber(false);
        return;
      }

      const digitsOnly = display.replace("-", "").replace(".", "");

      if (digitsOnly.length >= 8) {
        return;
      }

      setDisplay(display === "0" ? value : display + value);
      return;
    }

    if (value === "C") {
      setDisplay("0");
      setFirstNumber(null);
      setOperator(null);
      setSecondNumber(false);
      return;
    }

    if (["+", "-", "*", "/"].includes(value)) {
      setFirstNumber(Number(display));
      setOperator(value);
      setSecondNumber(true);
      return;
    }

    if (value === "=") {
      if (firstNumber === null || operator === null) {
        return;
      }

      const secondNumber = Number(display);
      let result;

      switch (operator) {
        case "+":
          result = firstNumber + secondNumber;
          break;
        case "-":
          result = firstNumber - secondNumber;
          break;
        case "*":
          result = firstNumber * secondNumber;
          break;
        case "/":
          result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
          break;
        default:
          return;
      }

      if (String(Math.floor(Math.abs(result))).length > 6) {
        setDisplay(result.toExponential(4));
      } else if (result % 1 !== 0 && result !== "Error") {
        setDisplay(String(Number(result.toFixed(4))));
      } else {
        setDisplay(String(result));
      }
      setFirstNumber(null);
      setOperator(null);
      setSecondNumber(true);
    }
  };

  return (
    <>
      <div id="main">
        <div id="calculator">
          <form>
            <input
              type="text"
              value={display}
              placeholder="0"
              disabled
              readOnly
            />
            <div id="calculator-icons">
              <div onClick={() => handleButton("1")}>
                <DogIcon
                  first={dogOne}
                  second={hoverDogOne}
                  alt="A dog icon with number 1"
                />
              </div>
              <div onClick={() => handleButton("2")}>
                <DogIcon
                  first={dogTwo}
                  second={hoverDogTwo}
                  alt="A dog icon with number 2"
                />
              </div>
              <div onClick={() => handleButton("3")}>
                <DogIcon
                  first={dogThree}
                  second={hoverDogThree}
                  alt="A dog icon with number 3"
                />
              </div>
              <div onClick={() => handleButton("+")}>
                <DogIcon
                  first={dogPlus}
                  second={hoverDogPlus}
                  alt="A dog icon with a plus symbol"
                />
              </div>
              <div onClick={() => handleButton("4")}>
                <DogIcon
                  first={dogFour}
                  second={hoverDogFour}
                  alt="A dog icon with number 4"
                />
              </div>
              <div onClick={() => handleButton("5")}>
                <DogIcon
                  first={dogFive}
                  second={hoverDogFive}
                  alt="A dog icon with number 5"
                />
              </div>
              <div onClick={() => handleButton("6")}>
                <DogIcon
                  first={dogSix}
                  second={hoverDogSix}
                  alt="A dog icon with number 6"
                />
              </div>
              <div onClick={() => handleButton("-")}>
                <DogIcon
                  first={dogMinus}
                  second={hoverDogMinus}
                  alt="A dog icon with a minus symbol"
                />
              </div>
              <div onClick={() => handleButton("7")}>
                <DogIcon
                  first={dogSeven}
                  second={hoverDogSeven}
                  alt="A dog icon with number 7"
                />
              </div>
              <div onClick={() => handleButton("8")}>
                <DogIcon
                  first={dogEight}
                  second={hoverDogEight}
                  alt="A dog icon with number 8"
                />
              </div>
              <div onClick={() => handleButton("9")}>
                <DogIcon
                  first={dogNine}
                  second={hoverDogNine}
                  alt="A dog icon with number 9"
                />
              </div>
              <div onClick={() => handleButton("*")}>
                <DogIcon
                  first={dogTimes}
                  second={hoverDogTimes}
                  alt="A dog icon with a multiply symbol"
                />
              </div>
              <div onClick={() => handleButton("0")}>
                <DogIcon
                  first={dogZero}
                  second={hoverDogZero}
                  alt="A dog icon with number 0"
                />
              </div>
              <div onClick={() => handleButton("C")}>
                <DogIcon
                  first={dogClear}
                  second={hoverDogClear}
                  alt="A dog icon with a clear symbol"
                />
              </div>
              <div onClick={() => handleButton("=")}>
                <DogIcon
                  first={dogEquals}
                  second={hoverDogEquals}
                  alt="A dog icon with an equals symbol"
                />
              </div>
              <div onClick={() => handleButton("/")}>
                <DogIcon
                  first={dogDivide}
                  second={hoverDogDivide}
                  alt="A dog icon with a divide symbol"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
