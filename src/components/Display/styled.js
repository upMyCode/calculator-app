import styled from 'styled-components'

const DisplayBlock = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 26.5px;
`

const CalculatorWindowWrapper = styled.div`
  width: 1443px;
  margin-left: 42.5px;
  margin-right: 23px;
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.MegaLargeResolution} {
    width: 1082.25px;
  }
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.ExtraMegaResolution} {
    width: 1262.6px;
  } ;
`

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
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#ffffff;'};
  display: flex;
  flex-direction: column;
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.MegaLargeResolution} {
    font-size: 48px;
  }
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.ExtraMegaResolution} {
    font-size: 56px;
  } ;
`

export {
  DisplayBlock,
  CalculatorWindow,
  CalculatorExpression,
  CalculatorWindowWrapper
}
