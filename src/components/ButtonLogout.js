import React, { Component } from 'react';
import {ConfigFire} from './firebase/Firebase';
import { withRouter } from 'react-router-dom';

class ButtonLogout extends Component{
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            email: '',
            pass: '',
        };
    }

    handleLogout(){
        ConfigFire.auth().signOut()
        .then(
            this.props.history.replace('/Inicio')
        )
        .catch(function(error) {
            // An error happened.
        });
    }
    render(){
        return(
            <a className="nav-link" href="#logout" onClick={this.handleLogout}>Cerrar sesión</a>
            // <button type="button" className="btn btn-secondary ml-auto" onClick={this.handleLogout}>Cerrar sesión</button>
        );
    }
}
export default withRouter(ButtonLogout);