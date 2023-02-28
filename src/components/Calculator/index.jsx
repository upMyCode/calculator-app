import React from 'react';
import { CalculatorBlock } from "./styled";
import {Display} from "../index";

const Calculator = () => {
  return (
      <CalculatorBlock>
        <Display />
      </CalculatorBlock>
  );
};

export default Calculator;
