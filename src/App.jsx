import styled, { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import { MainPageFC, MainPageCC } from './pages'
import PATHS from './constants/Paths'

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.theme.globalThemeColor === 'Light theme' ? '#FFFFFF;' : '#161616;'};
`
const App = () => {
  const dispatch = useDispatch()
  const globalThemeColor = useSelector(
    (state) => state.globalThemeReducer.globalThemeColor
  )
  const appResizingResolutionWindow = {
    QHD: '(min-width: 2560px)',
    QWXGA: '(max-width: 2559px) and (min-width: 2048px)',
    WSXGA: '(max-width: 1919px) and (min-width: 1680px)',
    UXGA: '(max-width: 1679px) and (min-width: 1600px)',
    WXGA: '(max-width: 1599px) and (min-width: 1440px)',
    SXGA: '(max-width: 1439px) and (min-width: 1280px)',
    XGA: '(max-width: 1279px) and (min-width: 1024px)'
  }

  console.log(globalThemeColor)
  return (
    <ThemeProvider theme={{ globalThemeColor, appResizingResolutionWindow }}>
      <AppWrapper>
        <Router>
          <Routes>
            <Route element={<MainPageFC />} path={PATHS.MAIN_PAGE_FC} />
            <Route
              element={<MainPageCC dispatch={dispatch} />}
              path={PATHS.MAIN_PAGE_CC}
            />
          </Routes>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
