import styled from 'styled-components';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import {HomePageFC, HomePageCC} from './pages';
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
              element={<HomePageFC/>}
              path={PATHS.HOME_PAGE_FC}
          />
          <Route
              element={<HomePageCC/>}
              path={PATHS.HOME_PAGE_CC}
          />
        </Routes>
      </Router>
    </AppWrapper>
  );
}

export default App;
