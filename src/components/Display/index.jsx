import React from 'react';
import { useSelector } from 'react-redux';
import {
  DisplayBlock,
  CalculatorWindow,
  CalculatorExpression,
  CalculatorWindowWrapper
} from './styled';
import ControlPanel from '../ControlPanel';
import Keypad from '../Keypad';

const Display = ({ handleButtonPressed }) => {
  const expression = useSelector(state => state.expressionReducer.expression);
  const result = useSelector(state => state.resultReducer.result);

  return (
      <DisplayBlock>
        <CalculatorWindowWrapper>
          <CalculatorWindow>
            <CalculatorExpression>
              <p>
                {expression}
                {
                  result ?
                    Number(result) !== Infinity
                        ?
                        ` = ${result}`
                        :
                        "Error"
                      :""
                }
              </p>
            </CalculatorExpression>
          </CalculatorWindow>
          <Keypad handleButtonPressed={handleButtonPressed}/>
        </CalculatorWindowWrapper>
        <ControlPanel />
      </DisplayBlock>
  );
};

export default Display;
