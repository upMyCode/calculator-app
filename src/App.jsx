import styled from 'styled-components';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import {MainPageFC, MainPageCC} from './pages';
import PATHS from './constants/Paths';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  &:focus {
    outline: none;
  }
`
const App = () => {
  const handleButtonPressed = (keyCode, key) => {
    console.log(keyCode, key);
  }
  return (
    <AppWrapper
        onKeyDown={(event) => handleButtonPressed(event.keyCode, event.key)}
        tabIndex={-1}
    >
      <Router>
        <Routes>
          <Route
              element={<MainPageFC handleButtonPressed={handleButtonPressed}/>}
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
