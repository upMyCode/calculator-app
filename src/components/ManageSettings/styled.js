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

const ManagePanelPopUpMenu = styled.select`
  width: 401px;
  height: 93px;
  margin-left: 91px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #434343;
  border-radius: 8px;
  text-align: left;
  font: normal normal normal 32px Helvetica Neue;
  letter-spacing: 0px;
  color: #000000;
  padding-left: 27px;
  //& {
  //  position: relative;
  //  padding-right: 25px;
  //  -webkit-appearance: none;
  //  -moz-appearance: none;
  //  -ms-appearance: none;
  //  appearance: none;
  //}
`

const ManagePanelPopUpElem = styled.option`
  width: 401px;
  height: 93px;
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
  ManagePanelLabel
}
