import React from 'react'
import History from '../History'
import { ControlPanelBlock } from './styled'

const ControlPanel = ({ setSidebarVisible }) => {
  return (
    <ControlPanelBlock onClick={() => setSidebarVisible((prev) => !prev)}>
      <History />
    </ControlPanelBlock>
  )
}

export default ControlPanel
