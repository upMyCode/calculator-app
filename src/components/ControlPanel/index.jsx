import React from 'react'
import PropTypes from 'prop-types'
import History from '../History'
import { ControlPanelBlock } from './styled'

const ControlPanel = ({ setSidebarVisible }) => {
  return (
    <ControlPanelBlock
      data-test-target="control-panel-button"
      onClick={() => setSidebarVisible((prev) => !prev)}
    >
      <History />
    </ControlPanelBlock>
  )
}

export default ControlPanel

ControlPanel.propTypes = {
  setSidebarVisible: PropTypes.func
}
