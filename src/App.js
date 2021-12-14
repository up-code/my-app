import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './utils/Login';

import Areas from './components/Areas/Areas.jsx';
import ProgramasList from './components/ProgramasList/ProgramasList.jsx';
import Programa from './components/ProgramasList/Programa.jsx';
import Navegacion from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Contacto from './page/Contactos';




const App = () => {


  return (<>
    <div id="fh5co-wrapper">
      <div id="fh5co-page">
        <Router>
          <Login />
          <div id="fh5co-header">
            <Navegacion></Navegacion>
          </div>
          <Switch>
            <Route path="/areas/:IdArea" >
              <Areas />
            </Route>
            <Route path="/ProgramasList/:IdArea/:Id" >
              <ProgramasList />
            </Route>
            <Route path="/Programa/:IdPrograma" >
              <Programa />
            </Route>
            <Route path="/" exact={true}>

              <Home />
            </Route>

            <Route path="/contacto" exact={true}>
              <Contacto />
            </Route>

          </Switch>
        </Router>
        <Footer></Footer>
      </div>
    </div>

  </>);


}

export default App;
