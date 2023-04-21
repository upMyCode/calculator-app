import styled from 'styled-components'

const SidebarBlock = styled.div`
  display: flex;
  margin-left: 311.5px;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-top: 56px;
  height: 160px;
  background-color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#707070;' : '#663ec1;'};
  border-radius: 8px 0 0 8px;
  @media ${(props) => props.theme.appResizingResolutionWindow.QHD} {
    width: 133;
    height: 213px;
    margin-left: 473px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.QWXGA} {
    width: 107px;
    height: 171px;
    margin-left: 343px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WXGA} {
    width: 75px;
    height: 120px;
    margin-left: 220px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.WSXGA} {
    width: 87.5px;
    height: 140px;
    margin-left: 265px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.UXGA} {
    width: 83px;
    height: 133px;
    margin-left: 255px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.SXGA} {
    width: 83px;
    height: 133px;
    margin-left: 170px;
  }
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 53px;
    height: 85px;
    margin-left: 143px;
  } ;
`

const SidebarButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  font-size: 18px;
  @media ${(props) => props.theme.appResizingResolutionWindow.XGA} {
    width: 27px;
    height: 27px;
    font-size: 10px;
    border-radius: 8px;
  }
  &:hover {
    border-color: #434343;
    color: #434343;
  }
`

export { SidebarBlock, SidebarButton }
