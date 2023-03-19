import logo from './logo.svg';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import Jokes from './pages/JokesPages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<LandingPages />}
          />
          <Route
            path='/jokes'
            element={<Jokes />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
