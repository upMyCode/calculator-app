import React from 'react'
import { SidebarBlock, SidebarButton } from './styled'

const Sidebar = ({ setSidebarVisible }) => {
  return (
    <SidebarBlock>
      <SidebarButton onClick={() => setSidebarVisible((prev) => !prev)}>
        ←
      </SidebarButton>
    </SidebarBlock>
  )
}

export default Sidebar
