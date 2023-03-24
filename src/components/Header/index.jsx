import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
  NavigationBlock,
  NavbarList,
  NavbarElement,
  NavbarLinkElements,
  NavbarHomeLink,
  NavbarSettingsLink,
  NavbarTitleElement
} from './styled'

const Header = () => {
  const navigate = useNavigate()

  return (
    <NavigationBlock>
      <NavbarList>
        <NavbarElement>
          <NavbarTitleElement>Calculator App</NavbarTitleElement>
        </NavbarElement>
        <NavbarLinkElements>
          <NavbarHomeLink onClick={() => navigate('/')}>Home</NavbarHomeLink>
          <NavbarSettingsLink onClick={() => navigate('/mainpagecc')}>
            Settings
          </NavbarSettingsLink>
        </NavbarLinkElements>
      </NavbarList>
    </NavigationBlock>
  )
}

export default Header
