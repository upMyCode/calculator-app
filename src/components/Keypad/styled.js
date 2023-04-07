import styled from 'styled-components'

const KeypadBlock = styled.div`
  width: 100%;
  display: flex;
`

const KeypadLeftSideBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-right: 128px;
  margin-left: 88px;
  @media (max-width: 1440px) {
    width: 112.5px;
    margin-left: 66px;
    margin-right: 96px;
  } ;
`

const KeypadRightSideBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-right: 91.5px;
  @media (max-width: 1440px) {
    width: 112.5px;
    margin-right: 68.625px;
  } ;
`

const KeypadBlockOnTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 848px;
  @media (max-width: 1440px) {
    width: 636px;
  } ;
`

const KeypadLeftSideElement = styled.div`
  width: 150px;
  height: 150px;
  background: ${(props) =>
    props.theme.globalThemeColor === 'Light theme'
      ? '#f2f2f2 0% 0% no-repeat padding-box;'
      : '0% 0% no-repeat padding-box #2D2D2D;'};
  border: 1px solid #707070;
  border-radius: 32px;
  font: normal 64px Helvetica Neue;
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#ffffff;'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 22.5px 0;
  @media (max-width: 1440px) {
    width: 112.5px;
    height: 112.5px;
    font-size: 48px;
  } ;
`

const KeypadRightSideElement = styled.div`
  width: 150px;
  height: 150px;
  background: ${(props) =>
    props.theme.globalThemeColor === 'Light theme'
      ? '#f2f2f2 0% 0% no-repeat padding-box;'
      : '0% 0% no-repeat padding-box #2D2D2D;'};
  border: 1px solid #707070;
  border-radius: 32px;
  font: normal 64px Helvetica Neue;
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#ffffff;'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 22.5px 0;
  @media (max-width: 1440px) {
    width: 112.5px;
    height: 112.5px;
    font-size: 48px;
  } ;
`

const KeypadOnTopElement = styled.div`
  width: 150px;
  height: 150px;
  background: ${(props) =>
    props.theme.globalThemeColor === 'Light theme'
      ? '#f2f2f2 0% 0% no-repeat padding-box;'
      : '0% 0% no-repeat padding-box #2D2D2D;'};
  border: 1px solid #707070;
  border-radius: 32px;
  font: normal 64px Helvetica Neue;
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#ffffff;'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 22.5px 128px 22.5px 0;
  @media (max-width: 1440px) {
    width: 112.5px;
    height: 112.5px;
    margin-right: 96px;
    font-size: 48px;
  } ;
`

export {
  KeypadBlock,
  KeypadLeftSideBlock,
  KeypadLeftSideElement,
  KeypadOnTopElement,
  KeypadBlockOnTop,
  KeypadRightSideBlock,
  KeypadRightSideElement
}
