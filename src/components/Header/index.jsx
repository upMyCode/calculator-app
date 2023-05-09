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
    <NavigationBlock data-test-target="header-main-block">
      <NavbarList>
        <NavbarElement>
          <NavbarTitleElement data-test-target="nav-bar-title">
            Calculator App
          </NavbarTitleElement>
        </NavbarElement>
        <NavbarLinkElements>
          <NavbarHomeLink
            data-test-target="nav-link-home"
            onClick={() => navigate('/')}
          >
            Home
          </NavbarHomeLink>
          <NavbarSettingsLink
            data-test-target="nav-link-settings"
            onClick={() => navigate('/mainpagecc')}
          >
            Settings
          </NavbarSettingsLink>
        </NavbarLinkElements>
      </NavbarList>
    </NavigationBlock>
  )
}

export default Header
