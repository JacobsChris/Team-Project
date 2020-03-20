import React from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../styles/personlocation.css';
import loading from '../loading.gif';
import '../styles/spinner.css';

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
            selectedMarker: {},
            eventsLoaded: false
        }
    }

    componentDidMount() {
        this.getResults(this.props.location.state);
    }

    getResults = (locationObject) => {
        axios.post('http://35.246.9.251:8080/back-end/locationEvent/getLocationEventsInArea', locationObject, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.setState({
                    results: response.data,
                    eventsLoaded: true
                })
                console.log('response', this.state.results);
                console.log(this.state.eventsLoaded);
            });
    }

    getDataType = (dataId) => {

        if (dataId === 'AnprID') {
            return 'ANPR data';
        }
        else if (dataId === 'eposID') {
            return 'EPOS data';
        }
        else if (dataId === 'atmID') {
            return 'ATM data';
        }
        else if (dataId === 'CellTowerID') {
            return 'Call data'
        }
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
        const search = this.props.location.state;
        console.log('search', search);
        const events = this.state.results.eventIdTimeAndDetails;
        console.log('events', events);
        console.log(this.state.selectedMarker.timeStamp);

        return (
            <div>
                <header className='person-location-header'>
                    <h2>Latitude: {search.latitude + ', '} Longitude: {search.longitude}</h2>
                </header>
                {this.state.eventsLoaded ? ((!events) ? (<div>No results found</div>) : (
                    <Map className='event-map'
                        google={this.props.google}
                        zoom={14}
                        style={mapStyles}
                        initialCenter={{
                            lat: search.latitude,
                            lng: search.longitude
                        }}
                    >
                        {events.map(e =>

                            (<Marker
                            position={{ lat: e.latitude, lng: e.longitude }}
                            onClick={this.onMarkerClick}
                            name={e.forenames + ' ' + e.surname}
                            info={this.getDataType(e.idType)}
                            time={e.timeStamp}
                            personData={e}
                        />)

                        )}
                        

                    <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedMarker.name}</h4>
                                <p>{this.state.selectedMarker.info}</p>
                                <p>{this.state.selectedMarker.time === undefined ? ' ' : (this.state.selectedMarker.time)}</p>
                            </div>
                        </InfoWindow>

                    </Map>
                         )): (<img alt='loading' src={loading} className="spinner" id="spinner"/>)}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBAW0t48SoZCxWY8MOoY6l6QlUvW5uEIB0'
})(LocationResults);

