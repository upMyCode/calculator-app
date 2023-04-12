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
    ExtraMegaResolution: '(max-width: 1919px) and (min-width: 1680px)',
    SemiMegaResolution: '(max-width: 1679px) and (min-width: 1441px)',
    MegaLargeResolution: '(max-width: 1440px) and (min-width: 1201px)',
    ExtraLargeResolution: '(max-width: 1200px) and (min-width: 993px)',
    LargeResolution: '(max-width: 992px) and (min-width: 769px)',
    MediumResolution: '(max-width: 768px) and (min-width: 577px)'
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
