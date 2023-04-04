import styled, { ThemeProvider } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import { MainPageFC, MainPageCC } from './pages'
import PATHS from './constants/Paths'

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`
const App = () => {
  const dispatch = useDispatch()
  const globalThemeColor = useSelector(
    (state) => state.globalThemeReducer.globalThemeColor
  )

  console.log(globalThemeColor)
  return (
    <ThemeProvider theme={{ globalThemeColor }}>
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
      /
    </ThemeProvider>
  )
}

export default App
