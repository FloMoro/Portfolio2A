import './App.css'
import Menu from 'components/Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from 'components/Menu/Menu';
import Global from 'components/Global/Global';
import Accueil from 'Pages/Accueil/Accueil';
import Audiovisuel from 'Pages/Audiovisuel/Audiovisuel';
import Developpement from 'Pages/Developpement/Developpement';
import Audio from 'Pages/Audio/Audio';
import Visuel from 'Pages/Visuel/Visuel';


function App() {
  return (
    <Router>

      <Header />

      <Menu/>

      

      <Switch>

        <Route path="/Accueil">
          <Accueil />
        </Route>

        <Route path="/Audiovisuel">
          <Global>
            <Audiovisuel />
          </Global>
        </Route>

        <Route path="/Developpement">
          <Global>
            <Developpement />
          </Global>
        </Route>

        <Route path="/Audio">
          <Global>
            <Audio />
          </Global>
        </Route>

        <Route path="/Visuel">
          <Global>
            <Visuel />
          </Global>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
