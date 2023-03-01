import React from 'react';
import {
  KeypadBlock,
  KeypadLeftSideBlock,
  KeypadLeftSideElement,
  KeypadBlockOnTop,
  KeypadOnTopElement,
  KeypadRightSideBlock,
  KeypadRightSideElement
} from './styled';
import {
  keyCupsListOnLeftSide,
  keyCupsListOnTop,
  keyCupsListOnRightSide
} from '../../constants/KeyCodes';

const Keypad = ({ handleButtonPressed }) => {
  return (
      <KeypadBlock>
        <KeypadLeftSideBlock>
          {keyCupsListOnLeftSide.map((item, id) => (
              <KeypadLeftSideElement onClick={() => handleButtonPressed(item.keyCode, item.label)} key={id}>
                {item.label}
              </KeypadLeftSideElement>
          ))}
        </KeypadLeftSideBlock>
        <KeypadBlockOnTop>
          {keyCupsListOnTop.map((item, id) => (
              <KeypadOnTopElement onClick={() => handleButtonPressed(item.keyCode, item.label)} key={id}>
                {item.label}
              </KeypadOnTopElement>
          ))}
        </KeypadBlockOnTop>
        <KeypadRightSideBlock>
          {keyCupsListOnRightSide.map((item, id) => (
              <KeypadRightSideElement onClick={() => handleButtonPressed(item.keyCode, item.label)} key={id}>
                {item.label}
              </KeypadRightSideElement>
          ))}
        </KeypadRightSideBlock>
      </KeypadBlock>
  );
};

export default Keypad;
