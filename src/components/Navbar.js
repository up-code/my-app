import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import TurisclubConsummer from '../utils/consummerTurisclub';


export default class Navegacion extends Component {
  render() {
    return (<Fragment>

      <div id="WAButton"></div>

      <header id="fh5co-header-section">

        <div className="container">
          <div className="nav-header">
            <a href="/" className="js-fh5co-nav-toggle fh5co-nav-toggle"
            ><i></i
            ></a>
            <h1 id="fh5co-logo"><a href="/">DEMO - AGENCIAS CONSUMER</a></h1>

            <nav id="fh5co-menu-wrap" role="navigation">
              <ul className="sf-menu" id="fh5co-primary-menu">
                <li>
                  <TurisclubConsummer />
                </li>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#areas">destinos</a>
                </li>

                <li><Link to="/Contacto">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    </Fragment>
    )
  }
}