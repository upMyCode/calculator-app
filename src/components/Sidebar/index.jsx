import React from 'react'
import PropTypes from 'prop-types'
import { SidebarBlock, SidebarButton } from './styled'

const Sidebar = ({ setSidebarVisible }) => {
  return (
    <SidebarBlock data-test-target="sidebar-block">
      <SidebarButton
        data-test-target="sidebar-button"
        onClick={() => setSidebarVisible((prev) => !prev)}
      >
        ←
      </SidebarButton>
    </SidebarBlock>
  )
}

export default Sidebar

Sidebar.propTypes = {
  setSidebarVisible: PropTypes.func
}
