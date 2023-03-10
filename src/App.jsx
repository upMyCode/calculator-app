import styled from 'styled-components';
import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { MainPageFC, MainPageCC } from './pages';
import PATHS from './constants/Paths';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
`
const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route
              element={<MainPageFC />}
              path={PATHS.MAIN_PAGE_FC}
          />
          <Route
              element={<MainPageCC />}
              path={PATHS.MAIN_PAGE_CC}
          />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
