import * as React from 'react'
import { connect } from 'react-redux'
import expressionAction from '../../store/actions/expressionAction'
import resultAction from '../../store/actions/resultAction'
import clearHistoryAction from '../../store/actions/clearHistoryAction'
import {
  ManageSettingsBlock,
  ManageSettingsTitle,
  ManagePanelBlock,
  ManagePanelPopUpMenu,
  ManagePanelPopUpElem,
  ClearHistoryButton,
  ManagePanelLabel
} from './styled'

class ManageSettings extends React.Component {
  render() {
    const { dispatch } = this.props
    return (
      <ManageSettingsBlock>
        <ManageSettingsTitle>Settings</ManageSettingsTitle>
        <ManagePanelLabel>Switch Theme</ManagePanelLabel>
        <ManagePanelBlock>
          <ManagePanelPopUpMenu>
            <ManagePanelPopUpElem>Light Theme</ManagePanelPopUpElem>
            <ManagePanelPopUpElem>Dark Theme</ManagePanelPopUpElem>
          </ManagePanelPopUpMenu>
          <ClearHistoryButton
            onClick={() => {
              dispatch(expressionAction('0'))
              dispatch(resultAction(''))
              dispatch(clearHistoryAction())
            }}
          >
            Clear All History
          </ClearHistoryButton>
        </ManagePanelBlock>
      </ManageSettingsBlock>
    )
  }
}

export default connect()(ManageSettings)
