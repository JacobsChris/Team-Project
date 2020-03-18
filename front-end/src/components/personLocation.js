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
            selectedMarker: {},
            epos: this.props.location.state.transactions.epos,
            atm: this.props.location.state.transactions.atm,
            vehicleSightings: this.props.location.state.vehicleSightings,
            callIncoming: this.props.location.state.callIncoming,
            callOutgoing: this.props.location.state.callOutgoing,
            anpr: false,
            mobile: false,
            transaction: false
            
        }
    }

    componentDidMount() {
        console.log('props', this.props.location.state)
        // this.setState({
        //     transactions: this.props.location.state
        // })
        console.log('transactions', this.state.callIncoming)
     
    }

    handleQuery = ({target: {name, checked}}) => {
        this.setState({
            [name]: checked
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
                                name="anpr"
                                onChange={this.handleQuery}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label="Transaction data"
                                name="transaction"
                                onChange={this.handleQuery}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label="Mobile data"
                                name="mobile"
                                onChange={this.handleQuery}
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
                        {this.state.transaction ?

                                this.state.epos?.map(location =>
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'EPOS'}
                                    />
                                )
                                
                                // this.state.atm?.map(location =>
                                //     <Marker
                                //         position={{ lat: location.latitude, lng: location.longitude }}
                                //         onClick={this.onMarkerClick}
                                //         name={'ATM'}
                                //     />
                                // )
                            
                        : ''}
                        {this.state.anpr ? 
                             
                                this.state.vehicleSightings?.map(location =>
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'Vehicle Sighting'}
                                    />
                                )
                            
                        : ''}
                        {this.state.mobile ? 
                            
                                (this.state.callIncoming?.map(location =>
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'Incoming Call'}
                                    />
                                ))
                                // this.state.callOutgoing?.map(location =>
                                //     <Marker
                                //         position={{ lat: location.latitude, lng: location.longitude }}
                                //         onClick={this.onMarkerClick}
                                //         name={'Outgoing Call'}
                                //     />
                                // )
                            
                        : ''}
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