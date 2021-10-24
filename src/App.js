import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import About from './pages/About';
import GlobalStyle from './GlobalStyles';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/technologies">
            <Technologies />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </AnimatePresence>
      <GlobalStyle />
    </>
  );
}

export default App;
