import React, { Component } from 'react';
import Nav from './Nav'
import './Ruta.css';

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
        <div className="view jarallax style" data-jarallax='{"speed": 0.2}'>
        <Nav />
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
        )
    }
}

export default withRouter (Ruta);