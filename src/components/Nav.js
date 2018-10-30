import React, { Component } from 'react';
import ButtonLogout from './ButtonLogout'
import Ruta from './Ruta'

class Nav extends Component {

  render() {
    return (
        <section>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
        <div className="container">
            <a className="navbar-brand title" href="#">
            <strong>* HL *</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <a className="nav-link" href="#">Inicio
                    <span className="sr-only"></span>
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={this.handleChangeMap}>Mapa</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" >Lista de Alumnos</a>
                </li>
            </ul>
            <div className="navbar-nav">
                <div className="nav-item">
                    <ButtonLogout />
                </div>
            </div>
            </div>
        </div>
        </nav>
</section>
     
    );
  }
}

export default Nav;