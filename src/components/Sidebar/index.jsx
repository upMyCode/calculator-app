import React from 'react'
import { SidebarBlock, SidebarButton } from './styled'

const Sidebar = ({ setSidebarVisible }) => {
  return (
    <SidebarBlock>
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
