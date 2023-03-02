import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  DisplayBlock,
  CalculatorWindow,
  CalculatorExpression,
  CalculatorWindowWrapper
} from './styled';
import ControlPanel from '../ControlPanel';
import Keypad from '../Keypad';
import { digits, operators, usedKeyCodes } from "../../constants/KeyCodes";
import expressionAction from "../../store/actions/expressionAction";

const Display = () => {
  const dispatch = useDispatch();
  const expression = useSelector(state => state.expressionReducer.expression);

  useEffect(() => {
    if (expression === "") {
      dispatch(expressionAction("0"));
    };
  }, [expression, dispatch]);

  const handleButtonPressed = (keyCode, key) => {
    if (!keyCode) return;
    if (!usedKeyCodes.includes(keyCode)) return;

    if (digits.includes(key)) {
      if (key === "0") {
        if (expression === "0") return;
      };
      if (expression !== "0") {
        dispatch(expressionAction(`${expression}${key}`));
      } else {
        dispatch(expressionAction(key))
      };
    } else if (operators.includes(key)) {
      const lastChar = expression.trim().slice(-1);

      if (lastChar === ".") return;
      if (expression === "0" && key === ")") return;
      if (expression === "0" && key === "(") return;

      if (key === "(" || key === ")") {
        if (key === "(" && digits.includes(lastChar)) return;
        if (key === "(" && lastChar === "(") return;
        if (key === ")" && lastChar === "(") return;
        if (key === ")" && !digits.includes(lastChar)) return;

        dispatch(expressionAction(`${expression} ${key} `));
      }

      if (operators.includes(lastChar)) {
        if (lastChar !== ")" && lastChar !== "(") return;
      };

      dispatch(expressionAction(`${expression} ${key} `));
    }

    if (keyCode === 8) {
      if (expression === "0") return;

      const newExpression = expression.slice(0, -1);
      dispatch(expressionAction(`${newExpression}`));
    };
  };

  return (
      <DisplayBlock
          onKeyDown={(event) => handleButtonPressed(event.keyCode, event.key)}
          tabIndex={-1}
      >
        <CalculatorWindowWrapper>
          <CalculatorWindow>
            <CalculatorExpression>
              {expression}
            </CalculatorExpression>
          </CalculatorWindow>
          <Keypad handleButtonPressed={handleButtonPressed}/>
        </CalculatorWindowWrapper>
        <ControlPanel />
      </DisplayBlock>
  );
};

export default Display;
