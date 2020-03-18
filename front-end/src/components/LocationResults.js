import React from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/personlocation.css';

const mapStyles = {
    width: '100%',
    height: '80%'
};

export class LocationResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            showingInfoWindow: false,
            activeMarker: {},
            selectedMarker: {}
        }
    }

    componentDidMount() {
        this.getResults(this.props.location.state);
    }

    getResults = (locationObject) => {
        debugger;
        axios.post('http://localhost:8080/back-end/locationEvent/getLocationEventsInArea', locationObject, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.setState({
                    results: response.data,
                })
                debugger;
                console.log('response', this.state.results);
            });
    }

    onMarkerClick = (props, marker, event) =>
        this.setState({
            selectedMarker: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div>
                <header className='person-location-header'>
                    <h2>LatLong</h2>
                </header>
                <Map className='event-map'
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: 53.483959,
                        lng: -2.244644
                    }}>
                    <Marker
                        position={{ lat: 53.475021, lng: -2.286451 }}
                        onClick={this.onMarkerClick}
                        name={'Test marker'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedMarker.name}</h4>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBAW0t48SoZCxWY8MOoY6l6QlUvW5uEIB0'
})(LocationResults);

