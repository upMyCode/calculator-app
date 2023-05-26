import * as React from 'react'
import PropTypes from 'prop-types'
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
      <ManageSettingsBlock data-test-target="manage-settings-block">
        <ManageSettingsTitle data-test-target="manage-settings-title">
          Settings
        </ManageSettingsTitle>
        <ManagePanelLabel data-test-target="manage-panel-label">
          Switch Theme
        </ManagePanelLabel>
        <ManagePanelBlock>
          <ManagePanelPopUpMenuWrapper>
            <ManagePanelPopUpMenu
              data-test-target="button-theme-switcher"
              isSwitcherThemeActive={this.state.isSwitcherThemeActive}
              onClick={this.handleThemeSwitcher}
            >
              {this.state.themeColor}
            </ManagePanelPopUpMenu>
            {this.state.isSwitcherThemeActive && (
              <ManagePanelPopUpList>
                <ManagePanelPopUpElem
                  data-test-target="button-theme-color-light"
                  onClick={(e) => {
                    this.handleChangeTheme(e)
                    this.handleThemeSwitcher()
                    dispatch(setGlobalThemeAction(e.target.textContent))
                  }}
                >
                  Light theme
                </ManagePanelPopUpElem>
                <ManagePanelPopUpElem
                  data-test-target="button-theme-color-dark"
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
            data-test-target="clear-all-history-button"
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

ManageSettings.propTypes = {
  dispatch: PropTypes.func
}
