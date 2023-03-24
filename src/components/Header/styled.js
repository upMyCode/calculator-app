import styled from 'styled-components'

const NavigationBlock = styled.div`
  width: 100%;
  height: 120px;
  background-color: #434343;
  padding: 0 32px 0 32px;
`

const NavbarList = styled.nav`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavbarElement = styled.div`
  color: #ffffff;
  font: normal 32px Helvetica Neue;
  @media (max-width: 1440px) {
    font-size: 24px;
  } ;
`

const NavbarTitleElement = styled.p`
  color: #ffffff;
  font: normal 32px Helvetica Neue;
  @media (max-width: 1440px) {
    font-size: 24px;
  } ;
`

const NavbarLinkElements = styled.div`
  display: flex;
  font: normal 32px Helvetica Neue;
  @media (max-width: 1440px) {
    font-size: 24px;
  } ;
`

const NavbarHomeLink = styled.p`
  font: normal 32px Helvetica Neue;
  border-bottom: 2px solid transparent;
  margin-top: 2px;
  opacity: 0.7;
  color: #ffffff;
  &:hover {
    opacity: 1;
    text-decoration: none;
    border-bottom: 2px solid #ffffff;
    cursor: pointer;
    margin-top: 2px;
  }
  @media (max-width: 1440px) {
    font-size: 24px;
  } ;
`

const NavbarSettingsLink = styled.p`
  font: normal 32px Helvetica Neue;
  border-bottom: 2px solid transparent;
  margin-top: 2px;
  opacity: 0.7;
  color: #ffffff;
  margin-left: 32px;
  &:hover {
    opacity: 1;
    text-decoration: none;
    border-bottom: 2px solid #ffffff;
    cursor: pointer;
    margin-top: 2px;
  }
  @media (max-width: 1440px) {
    font-size: 24px;
  } ;
`

export {
  NavigationBlock,
  NavbarList,
  NavbarElement,
  NavbarLinkElements,
  NavbarHomeLink,
  NavbarSettingsLink,
  NavbarTitleElement
}
