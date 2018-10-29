
import React, { Component } from 'react';
import './Login.css';
import  ConfigFire from './firebase/Firebase'

class Login extends Component{
    constructor(props){
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);

        this.state = {
            email: null,
            pass: '',
        };
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
        console.log(this.state.email);
        
    }

    handleChangePass(event) {
        this.setState({pass: event.target.value});
    }

    handleSignIn(){
        ConfigFire.auth().signInWithEmailAndPassword((this.state.email), (this.state.pass))
        // .then(
        //     this.props.history.replace('/menu') 
        // )
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
            <div className="container row">
                <form className="col-sm-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="usuario@usuario.com"
                        value={this.state.email} onChange={this.handleChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="123456"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Entrar</button>
                    
                </form>
            </div>
            
        );
    }
}

export default Login;