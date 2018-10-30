import React, {Component} from 'react';
import Nav from './Nav'
import './Maps.css';

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
          url: 'https://image.maps.api.here.com/mia/1.6/routing?mapview?w=600&h=300&poitxs=16&poitxc=black&poifc=red',
        }
    }
    
    render() {
        return (
            <div>
                <div id = "map">
                <Nav/>
                </div>
            
            <img
            src={ this.state.url
                + '&app_id=' + this.props.app_id
                + '&app_code=' + this.props.app_code
                + '&t=' + 4
                + '&waypoint0=19.4045782,-99.1640022'
                + '&waypoint1=19.3458581,-99.1041562'
                + '&waypoint2=19.417196,-99.159364'
                + '&waypoint3=19.413382,-99.171942'
                + '&poi=19.4045782,-99.1640022, 19.3458581,-99.1041562, 19.417196,-99.159364, 19.413382,-99.171942'
                }
            alt="Map"/>
            </div>
        );
    }
  }