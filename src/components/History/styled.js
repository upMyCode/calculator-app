import styled from 'styled-components'

const HistoryBlock = styled.div`
  width: 377.5px;
  height: 910px;
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.MegaLargeResolution} {
    width: 283px;
    height: 682.5px;
  }
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.ExtraMegaResolution} {
    width: 330px;
    height: 796.25px;
  } ;
`

const HistoryTitle = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 7.5px;
  font: normal 32px Helvetica Neue;
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#ffffff;'};
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.MegaLargeResolution} {
    font-size: 24px;
  }
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.ExtraMegaResolution} {
    font-size: 28px;
  } ;
`

const HistoryOperationList = styled.div`
  width: 100%;
  max-height: 827px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 11px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #434343;
    border-radius: 8px;
  }
`

const HistoryOperationItem = styled.p`
  font: normal 30px Helvetica Neue;
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#ffffff;'};
  margin: 50px 0 50px 40.125px;
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.MegaLargeResolution} {
    font-size: 22.5px;
  }
  @media ${(props) =>
      props.theme.appResizingResolutionWindow.ExtraMegaResolution} {
    font-size: 26.25px;
  } ;
`

export {
  HistoryBlock,
  HistoryTitle,
  HistoryOperationList,
  HistoryOperationItem
}
