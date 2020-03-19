import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Form, Col } from 'react-bootstrap';
import '../styles/personlocation.css';
import DatePicker from './DateTimeSelector';
import parseISO from 'date-fns/parse';
import moment from 'react-moment';

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
            queryEpos: [],
            queryAtm: [],
            queryVehicle: [],
            queryCallIn: [],
            queryCallOut: [],
            anpr: false,
            mobile: false,
            transaction: false,
            endDateTime: '',
            startDateTime: '',
            dateUnselected: true
            
        }
    }

    handleQuery = ({target: {name, checked}}) => {
        this.setState({
            [name]: checked
        });
    }

    handleDateChange = (key) => (event) => {

        this.setState({
            [key]: event, 
        });

        if(this.state.startDateTime === '' ^ this.state.endDateTime === ''){
            this.setState({
                dateUnselected: false
            })
        }

        const start = new Date(this.state.startDateTime);
        const end = new Date(this.state.endDateTime);

        // let eposData = [];
        // for(let obj of this.state.epos){
        //     eposData.push(obj);
        // }
        // for(let obj in eposData){
        //     const date = new Date(eposData[obj].timestamp);
        //     if(start > date || end < date){
        //             eposData.pop(obj);
        //     }            
        // }
        // this.setState({
        //     queryEpos: eposData
        // })

        let eposData = [];
        for(let epos of this.state.epos){
            const date = new Date(epos.timestamp);
            if(start < date && end > date){
                eposData.push(epos);
            } 
        }
        this.setState({
            eposAtm: eposData
        })

        let atmData = [];
        for(let atm of this.state.atm){
            const date = new Date(atm.timestamp);
            if(start < date && end > date){
                atmData.push(atm);
            } 
        }
        this.setState({
            queryAtm: atmData
        })

        let vehicleData = [];
        for(let vehicle of this.state.vehicleSightings){
            const date = new Date(vehicle.timestamp);
            if(start < date && end > date){
                vehicleData.push(vehicle);
            } 
        }
        this.setState({
            queryVehicle: vehicleData
        })

        let callInData = [];
        for(let call of this.state.callIncoming){
            const date = new Date(call.timestamp);
            if(start < date && end > date){
                callInData.push(call);
            } 
        }
        this.setState({
            queryCallIn: callInData
        })

        let callOutData = [];
        for(let call of this.state.callOutgoing){
            const date = new Date(call.timestamp);
            if(start < date && end > date){
                callOutData.push(call);
            } 
        }
        this.setState({
            queryCallOut: callOutData
        })

    };

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
                        <DatePicker
                            name='startDateTime'
                            value={this.state.startDateTime}
                            handleChange={this.handleDateChange('startDateTime')}
                            dateFormat='MMMM d, yyyy h:mm aa' />
                        </Col>
                        <Col>
                            
                            <DatePicker
                            name='endDateTime'
                            value={this.state.endDateTime}
                            handleChange={this.handleDateChange('endDateTime')}
                            dateFormat='MMMM d, yyyy h:mm aa' />
                        </Col>
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label="ANPR data"
                                name="anpr"
                                // checked="true"
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
                                this.state.queryEpos?.map(location => 
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'EPOS'}
                                    />
                                )
                        : ''}
                        {this.state.transaction?
                            this.state.queryAtm?.map(location =>
                                <Marker
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    onClick={this.onMarkerClick}
                                    name={'ATM'}
                                />
                            )
                        : ''}
                        {this.state.anpr ? 
                                this.state.queryVehicle?.map(location =>
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'Vehicle Sighting'}
                                    />
                                )
                            
                        : ''}
                        {this.state.mobile ? 
                                this.state.queryCallIn?.map(location =>
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'Incoming Call'}
                                    />
                                )
                        : ''}
                        {this.state.mobile ? 
                            this.state.queryCallOut?.map(location =>
                                <Marker
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    onClick={this.onMarkerClick}
                                    name={'Outgoing Call'}
                                />
                            )
                    : ''}
                    {this.state.transaction && this.state.dateUnselected?
                                this.state.epos?.map(location => 
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'EPOS'}
                                    />
                                )
                        : ''}
                        {this.state.transaction && this.state.dateUnselected?
                            this.state.atm?.map(location =>
                                <Marker
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    onClick={this.onMarkerClick}
                                    name={'ATM'}
                                />
                            )
                        : ''}
                        {this.state.anpr && this.state.dateUnselected? 
                                this.state.vehicleSightings?.map(location =>
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'Vehicle Sighting'}
                                    />
                                )
                            
                        : ''}
                        {this.state.mobile && this.state.dateUnselected? 
                                this.state.callIncoming?.map(location =>
                                    <Marker
                                        position={{ lat: location.latitude, lng: location.longitude }}
                                        onClick={this.onMarkerClick}
                                        name={'Incoming Call'}
                                        time={new Date(location.timestamp)}
                                    />
                                )
                        : ''}
                        {this.state.mobile && this.state.dateUnselected? 
                            this.state.callOutgoing?.map(location =>
                                <Marker
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    onClick={this.onMarkerClick}
                                    name={'Outgoing Call'}
                                    time={location.timestamp}
                                />
                            )
                    : ''}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                    >
                        <div>
                            <h4>{this.state.selectedMarker.name}</h4>
                            <h4>{this.state.selectedMarker.time}</h4>
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