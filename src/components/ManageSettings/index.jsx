import * as React from 'react'
import { connect } from 'react-redux'
import expressionAction from '../../store/actions/expressionAction'
import setGlobalThemeAction from '../../store/actions/setGlobalThemeAction'
import resultAction from '../../store/actions/resultAction'
import clearHistoryAction from '../../store/actions/clearHistoryAction'
import {
  ManageSettingsBlock,
  ManageSettingsTitle,
  ManagePanelBlock,
  ManagePanelPopUpMenu,
  ClearHistoryButton,
  ManagePanelLabel,
  ManagePanelPopUpMenuWrapper,
  ManagePanelPopUpList,
  ManagePanelPopUpElem
} from './styled'

class ManageSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSwitcherThemeActive: false,
      themeColor: 'Light theme'
    }
  }

  handleThemeSwitcher = () =>
    this.setState({ isSwitcherThemeActive: !this.state.isSwitcherThemeActive })

  handleChangeTheme = (e) => this.setState({ themeColor: e.target.textContent })

  render() {
    const { dispatch } = this.props
    return (
      <ManageSettingsBlock>
        <ManageSettingsTitle>Settings</ManageSettingsTitle>
        <ManagePanelLabel>Switch Theme</ManagePanelLabel>
        <ManagePanelBlock>
          <ManagePanelPopUpMenuWrapper>
            <ManagePanelPopUpMenu onClick={this.handleThemeSwitcher}>
              {this.state.themeColor}
            </ManagePanelPopUpMenu>
            {this.state.isSwitcherThemeActive && (
              <ManagePanelPopUpList>
                <ManagePanelPopUpElem
                  onClick={(e) => {
                    this.handleChangeTheme(e)
                    this.handleThemeSwitcher()
                    dispatch(setGlobalThemeAction(e.target.textContent))
                  }}
                >
                  Light theme
                </ManagePanelPopUpElem>
                <ManagePanelPopUpElem
                  onClick={(e) => {
                    this.handleChangeTheme(e)
                    this.handleThemeSwitcher()
                    dispatch(setGlobalThemeAction(e.target.textContent))
                  }}
                >
                  Dark theme
                </ManagePanelPopUpElem>
              </ManagePanelPopUpList>
            )}
          </ManagePanelPopUpMenuWrapper>
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
