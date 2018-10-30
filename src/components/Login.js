import React, { Component } from 'react';
import './Login.css';
import  {ConfigFire} from './firebase/Firebase';
import { withRouter } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);

        this.state = {
            email: '',
            pass: '',
        };
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePass(event) {
        this.setState({pass: event.target.value});
    }

    handleSignIn(){
        ConfigFire.auth().signInWithEmailAndPassword((this.state.email), (this.state.pass))
        .then(
            this.props.history.replace('/Home') 
        )
        .catch(function(error) {
            console.log(error);
            
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    render(){
        return(
            <header>
                <div className="view jarallax style" data-jarallax='{"speed": 0.2}'>
                    <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 mb-12 white-text text-center formLogin">
                        
                            <div className="card wow fadeInRight" data-wow-delay="0.3s">
                            <div className="card-body">
                            
                                <div className="text-center">
                                <h3 className="white-text">
                                    <p className="title colorFondo">* HERE *</p>
                                </h3>
                                </div>
                            
                                <form className='novalidate'>
                                <div className="md-form">
                                    <input type="email" id="email" className="form-control sizeText"/>
                                    <label htmlFor="form2">Correo:</label>
                                </div>
                                <div className="md-form">
                                    <input type="password" id="password" className=" form-control sizeText"/>
                                    <label htmlFor="form4">Contraseña:</label>
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn colorFondo color sizeBoton" onClick={this.handleSignIn}
                                    >Iniciar</button>
                                    <hr className="hr-light mb-3 mt-2 ancho"/>
                                    <div className="inline-ul text-center d-flex justify-content-center">
                                    
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
            </header>            
        );
    }
}

export default withRouter (Login);