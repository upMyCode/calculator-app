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
  @media ${(props) => props.theme.appResizingResolutionWindow.QHD} {
    width: 200px;
    margin-left: 117px;
    margin-right: 171px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.QWXGA} {
    width: 160px;
    margin-left: 94px;
    margin-right: 137px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 112.5px;
    margin-left: 66px;
    margin-right: 96px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 131.25px;
    margin-left: 77px;
    margin-right: 112px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 125px;
    margin-right: 107px;
    margin-left: 73px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 100px;
    margin-right: 85px;
    margin-left: 59px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 80px;
    margin-right: 68px;
    margin-left: 47px;
  } ;
`

const KeypadRightSideBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin-right: 91.5px;
  @media ${(props) => props.theme.appResizingResolutionWindow.QHD} {
    width: 200px;
    margin-right: 122px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.QWXGA} {
    width: 160px;
    margin-right: 98px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 112.5px;
    margin-right: 68.625px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 131.25px;
    margin-right: 80px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 125px;
    margin-right: 76.25px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 100px;
    margin-right: 61px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 80px;
    margin-right: 49px;
  } ;
`

const KeypadBlockOnTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 848px;
  @media ${(props) => props.theme.appResizingResolutionWindow.QHD} {
    width: 1131px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.QWXGA} {
    width: 905px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 636px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 742px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 707px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 565px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 452px;
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
  @media ${(props) => props.theme.appResizingResolutionWindow.QHD} {
    width: 200px;
    height: 200px;
    font-size: 85px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.QWXGA} {
    width: 160px;
    height: 160px;
    font-size: 68px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 112.5px;
    height: 112.5px;
    font-size: 48px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 131.25px;
    height: 131.25px;
    font-size: 56px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 125px;
    height: 125px;
    font-size: 53px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 100px;
    height: 100px;
    font-size: 43px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 80px;
    height: 80px;
    font-size: 34px;
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
  @media ${(props) => props.theme.appResizingResolutionWindow.QHD} {
    width: 200px;
    height: 200px;
    font-size: 85px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.QWXGA} {
    width: 160px;
    height: 160px;
    font-size: 68px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 112.5px;
    height: 112.5px;
    font-size: 48px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 131.25px;
    height: 131.25px;
    font-size: 56px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 125px;
    height: 125px;
    font-size: 53px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 100px;
    height: 100px;
    font-size: 43px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 80px;
    height: 80px;
    font-size: 34px;
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
  @media ${(props) => props.theme.appResizingResolutionWindow.QHD} {
    width: 200px;
    height: 200px;
    font-size: 85px;
    margin-right: 171px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.QWXGA} {
    width: 160px;
    height: 160px;
    font-size: 68px;
    margin-right: 137px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 112.5px;
    height: 112.5px;
    margin-right: 96px;
    font-size: 48px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 131.25px;
    height: 131.25px;
    font-size: 56px;
    margin-right: 112px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 125px;
    height: 125px;
    font-size: 53px;
    margin-right: 107px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 100px;
    height: 100px;
    font-size: 43px;
    margin-right: 85px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 80px;
    height: 80px;
    font-size: 34px;
    margin-right: 68px;
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
