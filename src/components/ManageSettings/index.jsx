import * as React from 'react'
import {
  ManageSettingsBlock,
  ManageSettingsTitle,
  ManagePanelBlock,
  ManagePanelPopUpMenu,
  ManagePanelPopUpElem,
  ClearHistoryButton,
  ManagePanelLabel
} from './styled'

export default class ManageSettings extends React.Component {
  render() {
    return (
      <ManageSettingsBlock>
        <ManageSettingsTitle>Settings</ManageSettingsTitle>
        <ManagePanelLabel>Switch Theme</ManagePanelLabel>
        <ManagePanelBlock>
          <ManagePanelPopUpMenu>
            <ManagePanelPopUpElem>Light Theme</ManagePanelPopUpElem>
            <ManagePanelPopUpElem>Dark Theme</ManagePanelPopUpElem>
          </ManagePanelPopUpMenu>
          <ClearHistoryButton>Clear All History</ClearHistoryButton>
        </ManagePanelBlock>
      </ManageSettingsBlock>
    )
  }
}
