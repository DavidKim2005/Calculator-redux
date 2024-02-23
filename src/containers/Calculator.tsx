import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { divide, multiply, plus, subtract } from "./Calculation";

const handleButtonClick = (number: number) => {
  if (number === 'C') {
    document.getElementById('result').innerText = '';
  } else {
    document.getElementById('result').innerText += number;
  }
};

const Calculator = () => {
  const calculatorValue = useSelector((state: RootState) => state.calculator.value);
  const dispatch = useDispatch();

  return (
    <main>
      <div className="calculator">
        <h1>Калькулятор</h1>
        <div className="result" id="result">{calculatorValue}</div>
        <div>
          <button className="button" onClick={() => handleButtonClick(1)}>1</button>
          <button className="button" onClick={() => handleButtonClick(2)}>2</button>
          <button className="button" onClick={() => handleButtonClick(3)}>3</button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick(4)}>4</button>
          <button className="button" onClick={() => handleButtonClick(5)}>5</button>
          <button className="button" onClick={() => handleButtonClick(6)}>6</button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick(7)}>7</button>
          <button className="button" onClick={() => handleButtonClick(8)}>8</button>
          <button className="button" onClick={() => handleButtonClick(9)}>9</button>
        </div>
        <div>
          <button className="button" onClick={() => handleButtonClick(0)}>0</button>
          <button className="button" onClick={() => dispatch(plus())}>+</button>
          <button className="button" onClick={() => dispatch(subtract())}>-</button>
        </div>
        <div>
          <button className="button" onClick={() => dispatch(multiply())}>*</button>
          <button className="button" onClick={() => dispatch(divide())}>/</button>
          <button className="button" onClick={() => handleButtonClick('C')}>C</button>
        </div>
        <button>=</button>
      </div>
    </main>
  );
}

export default Calculator;
