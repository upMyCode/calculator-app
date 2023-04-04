import styled from 'styled-components'

const ManageSettingsBlock = styled.div`
  width: 100%;
`

const ManageSettingsTitle = styled.h1`
  font-size: 64px;
  font: normal 64px Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  margin: 61px 0 46px 84px;
`
const ManagePanelLabel = styled.label`
  width: 153px;
  height: 28px;
  margin-left: 94px;
  text-align: left;
  font: normal normal normal 24px Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`

const ManagePanelBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ManagePanelPopUpMenuWrapper = styled.div`
  position: relative;
  width: 401px;
  height: 93px;
  margin-left: 91px;
  &::before {
    content: '';
    position: absolute;
    right: 25px;
    top: 38px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 16.5px 10.25px 0 10.25px;
    border-color: #707070 transparent transparent transparent;
    pointer-events: none;
  }
`

const ManagePanelPopUpMenu = styled.div`
  display: flex;
  align-items: center;
  width: 401px;
  height: 93px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #434343;
  border-radius: 8px 8px 0 0;
  text-align: left;
  font: normal normal normal 32px Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  padding-left: 27px;
  cursor: pointer;
  // border-bottom-color: transparent;
`
const ManagePanelPopUpList = styled.ul`
  width: 401px;
`
const ManagePanelPopUpElem = styled.li`
  display: flex;
  align-items: center;
  width: 401px;
  background-color: white;
  border: 2px solid #707070;
  font: normal normal normal 32px Helvetica Neue;
  color: #000000;
  cursor: pointer;
  list-style-type: none;
  &:last-child {
    border-top-color: transparent;
    border-radius: 0 0 8px 8px;
    padding: 12.5px 0 12px 27px;
  }
  &:first-child {
    padding: 15px 0 10.5px 27px;
  }
  &:hover {
    background-color: rgb(233, 233, 233);
  }
`

const ClearHistoryButton = styled.button`
  width: 401px;
  height: 93px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  cursor: pointer;
  margin-left: 91px;
  margin-top: 32px;
  border: 2px solid #434343;
  border-radius: 8px;
  text-align: left;
  font: normal normal normal 32px Helvetica Neue;
  letter-spacing: 0px;
  padding-left: 27px;
  color: #000000;
  opacity: 1;
  &:hover {
    background: #c7c7c7 0% 0% no-repeat padding-box;
  }
`

export {
  ManageSettingsBlock,
  ManageSettingsTitle,
  ManagePanelBlock,
  ManagePanelPopUpMenu,
  ManagePanelPopUpElem,
  ClearHistoryButton,
  ManagePanelLabel,
  ManagePanelPopUpMenuWrapper,
  ManagePanelPopUpList
}
