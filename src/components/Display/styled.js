import styled from 'styled-components';

const DisplayBlock = styled.div`
  width: 100%;
  display: flex;
  padding-top: 23.5px;
  padding-bottom: 26.5px;
  &:focus {
    outline: none;
  }
`;

const CalculatorWindowWrapper = styled.div`
  width: 1443px;
  margin-left: 42.5px;
  margin-right: 23px;
  @media (max-width: 1440px) {
    width: 1082.25px;
  };
`;

const CalculatorWindow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 161.5px;
  border-bottom: 2px solid #707070;
`

const CalculatorExpression = styled.p`
  font: normal 64px Helvetica Neue;
  margin: 56px 114.5px 30.5px 0;
  color: #000000;
  @media (max-width: 1440px) {
    font-size: 48px;
  };
`;

export {
  DisplayBlock,
  CalculatorWindow,
  CalculatorExpression,
  CalculatorWindowWrapper
};