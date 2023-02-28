import React from 'react';
import {
  DisplayBlock,
  CalculatorWindow,
  CalculatorExpression,
  CalculatorWindowWrapper
} from './styled';
import ControlPanel from '../ControlPanel';
import Keypad from '../Keypad';

const Display = () => {
  return (
      <DisplayBlock>
        <CalculatorWindowWrapper>
          <CalculatorWindow>
            <CalculatorExpression>
              4500.233
            </CalculatorExpression>
          </CalculatorWindow>
          <Keypad />
        </CalculatorWindowWrapper>
        <ControlPanel />
      </DisplayBlock>
  );
};

export default Display;
