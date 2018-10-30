import React, { Component } from 'react';
import './Ruta.css';
import ButtonLogout from './ButtonLogout';

import { withRouter } from 'react-router-dom';

class Ruta extends Component{
    constructor(props){
        super(props);
            this.handleChangeMap = this.handleChangeMap.bind(this);
    }
    
     handleChangeMap(){
        this.props.history.replace('/Location');
    }
     render(){
    return(
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
                    <span className="sr-only">(current)</span>
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
         <div className="view jarallax style" data-jarallax='{"speed": 0.2}'>
            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                <div className="col-md-6 mb-12 white-text text-center formLogin">
                    <div className="card wow fadeInRight" data-wow-delay="0.3s">
                    <div className="card-body">
                        <div className="text-center">
                        <h3 className="white-text">
                            <p className="title colorFondo">* Colegio Benito Juárez *</p>
                        </h3>
                        </div>
                        <form className='novalidate'>
                        <div className="md-form">
                            <input type="text" id="email" className="form-control sizeText"/>
                            <label htmlFor="form2">Ruta:</label>
                        </div>
                        <div className="md-form">
                        <select className="browser-default custom-select">
                            <option value="0">Función:</option>
                            <option value="1">Recepción</option>
                            <option value="2">Entrega</option>
                            
                        </select>
                            
                        </div>
                        <div className="text-center mt-4">
                            <button type="submit" className="btn colorFondo color sizeBoton" onClick={this.handleChangeMap}>Comienzo Ruta</button>
                            <hr className="hr-light mb-3 mt-2 ancho"/>
                            <div className="inline-ul text-center d-flex justify-content-center">
                            <div className="navbar-nav">
                                <div className="nav-item">
                                </div>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>     
        );
    }
}

export default withRouter (Ruta);