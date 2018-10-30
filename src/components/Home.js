import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Location from './Location';
import Ruta from './Ruta';

class Home extends Component{
    render(){
        return(
            <section className="container">
                {/* <Location /> */}
                <Ruta />
            </section>
        );
    }
}

export default withRouter(Home);