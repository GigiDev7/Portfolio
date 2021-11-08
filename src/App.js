import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import Projects from './pages/Projects';
import About from './pages/About';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <>
      <Header />

      <Switch>
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

      <GlobalStyle />
    </>
  );
}

export default App;
