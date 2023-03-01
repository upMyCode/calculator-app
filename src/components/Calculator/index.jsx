import React from 'react';
import { CalculatorBlock } from "./styled";
import {Display} from "../index";

const Calculator = ({ handleButtonPressed }) => {
  return (
      <CalculatorBlock>
        <Display handleButtonPressed={handleButtonPressed}/>
      </CalculatorBlock>
  );
};

export default Calculator;
