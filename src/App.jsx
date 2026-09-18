import { useState, useRef } from "react";
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
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  return (
    <>
      <div id="main">
        <div id="calculator">
          <form>
            <input
              pattern="[0-9]"
              ref={inputRef}
              type="number"
              placeholder=" 0"
              maxLength="10"
              disabled
            />
            <div id="calculator-icons">
              <DogIcon
                first={dogOne}
                second={hoverDogOne}
                alt="A dog icon with number 1"
              />
              <DogIcon
                first={dogTwo}
                second={hoverDogTwo}
                alt="A dog icon with number 2"
              />
              <DogIcon
                first={dogThree}
                second={hoverDogThree}
                alt="A dog icon with number 3"
              />
              <DogIcon
                first={dogPlus}
                second={hoverDogPlus}
                alt="A dog icon with a plus symbol"
              />
              <DogIcon
                first={dogFour}
                second={hoverDogFour}
                alt="A dog icon with number 4"
              />
              <DogIcon
                first={dogFive}
                second={hoverDogFive}
                alt="A dog icon with number 5"
              />
              <DogIcon
                first={dogSix}
                second={hoverDogSix}
                alt="A dog icon with number 6"
              />
              <DogIcon
                first={dogMinus}
                second={hoverDogMinus}
                alt="A dog icon with a minus symbol"
              />
              <DogIcon
                first={dogSeven}
                second={hoverDogSeven}
                alt="A dog icon with number 7"
              />
              <DogIcon
                first={dogEight}
                second={hoverDogEight}
                alt="A dog icon with number 8"
              />
              <DogIcon
                first={dogNine}
                second={hoverDogNine}
                alt="A dog icon with number 9"
              />
              <DogIcon
                first={dogTimes}
                second={hoverDogTimes}
                alt="A dog icon with a multiply symbol"
              />
              <DogIcon
                first={dogZero}
                second={hoverDogZero}
                alt="A dog icon with number 0"
              />
              <DogIcon
                first={dogClear}
                second={hoverDogClear}
                alt="A dog icon with a clear symbol"
              />
              <DogIcon
                first={dogEquals}
                second={hoverDogEquals}
                alt="A dog icon with an equals symbol"
              />
              <DogIcon
                first={dogDivide}
                second={hoverDogDivide}
                alt="A dog icon with a divide symbol"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
