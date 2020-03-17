import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Form, Col } from 'react-bootstrap';
import '../styles/personlocation.css';

const mapStyles = {
    width: '100%',
    height: '80%'
};

export class PersonLocation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedMarker: {}
        }
    }

    componentDidMount() {
        console.log('props', this.props.location.state)
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
                    <h2>Person name</h2>
                </header>
                <Form id='person-location-form'>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="Start time" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="End time" />
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label="ANPR data"
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label="Transaction data"
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label="Mobile data"
                            />
                        </Col>
                    </Form.Row>
                </Form>
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
})(PersonLocation);