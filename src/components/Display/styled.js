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
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 1082.25px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 1262.6px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 1202.5px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 962px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 770px;
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
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    font-size: 48px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    font-size: 56px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    font-size: 53px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    font-size: 43px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    font-size: 34px;
  } ;
`

export {
  DisplayBlock,
  CalculatorWindow,
  CalculatorExpression,
  CalculatorWindowWrapper
}
