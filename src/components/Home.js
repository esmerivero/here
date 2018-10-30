import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';

class Home extends Component{
    // constructor(props){
    //     super(props);

    //     this.handleChangeEmail = this.handleChangeEmail.bind(this);
    //     this.handleChangePass = this.handleChangePass.bind(this);
    //     this.handleSignIn = this.handleSignIn.bind(this);

    //     this.state = {
    //         email: null,
    //         pass: '',
    //     };
    // }

    render(){
        return(
            <section className="container">
                <Navbar />
            </section>
        );
    }
}

export default withRouter(Home);