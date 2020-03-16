import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker, Circle} from "react-google-maps"

import '../styles/LocationResults.css'

const input = {
    "radius": 5 * 1000,
    "latitude": 51.5,
    "longitude": 0.15
};

const circleOpt = {
    "defaultCenter": {
        lat: parseFloat(input.latitude),
        lng: parseFloat(input.longitude)
    },
    "options": {
        "strokeColor": "#ff0000"
    },
    "radius": input.radius
};

const results = [{
    "anprId": 0,
    "streetName": "Rainham Road South, A1112",
    "latitude": 51.5384050430001,
    "longitude": 0.1668546386105114
}, {
    "anprId": 266,
    "streetName": "The Furry, A394",
    "latitude": 50.096346998878126,
    "longitude": -5.272012880564024
}];

const Map = withScriptjs(withGoogleMap(props =>
    <GoogleMap

        defaultZoom={10}
        defaultCenter={{lat: input.latitude, lng: input.longitude}}
    >
        <Circle
            defaultCenter={circleOpt.defaultCenter}
            options={circleOpt.options}
            radius={circleOpt.radius}
        />
        {
            results.map(results =>
                <Marker
                    key={results.anprId}
                    position={{lat: results.latitude, lng: results.longitude}}
                />
            )
        }

    </GoogleMap>
));

export default class LocationResults extends React.Component {


    render() {


        return (

            <div className="row">
                <div className="column">
                    <h2>Location Search Results</h2>
                    <p>results go here</p>
                </div>
                <div className="column">
                    <Map
                        id="resultmap"
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAW0t48SoZCxWY8MOoY6l6QlUvW5uEIB0&callback=initMap"
                        loadingElement={<div style={{height: `100%`}}/>}
                        containerElement={<div style={{height: `400px`}}/>}
                        mapElement={<div style={{height: `75%`}}/>}
                    />
                </div>
            </div>
        );
    }
}

