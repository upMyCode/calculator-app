import styled from 'styled-components'

const HistoryBlock = styled.div`
  width: 377.5px;
  height: 910px;
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 283px;
    height: 682.5px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 330px;
    height: 796.25px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 315px;
    height: 758px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 252px;
    height: 607px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 201px;
    height: 485px;
  } ;
`

const HistoryTitle = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 7.5px;
  font: normal 32px Helvetica Neue;
  color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#000000;' : '#ffffff;'};
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    font-size: 24px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    font-size: 28px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    font-size: 27px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    font-size: 21px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    font-size: 17px;
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
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    font-size: 22.5px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    font-size: 26.25px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    font-size: 25px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    font-size: 20px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    font-size: 16px;
  } ;
`

export {
  HistoryBlock,
  HistoryTitle,
  HistoryOperationList,
  HistoryOperationItem
}
