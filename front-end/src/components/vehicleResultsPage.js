import React from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/peopleResults.css';
import { MdDirectionsCar } from 'react-icons/md';
import loading from '../loading.gif';
import '../styles/spinner.css';

export default class VehicleResultsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            vehicleDetails: [],
            detailsLoaded: true,
            vehiclesLoaded: false
        };
    };

    componentDidMount() {
        console.log(this.props);
        const searchPlate = new URLSearchParams(this.props.location.search).get('plate');

        let data = {
            vehicleRegistrationNo: searchPlate,
            make: '',
            model: '',
            colour: '',
            registrationDate: ''
        };

        axios.post('http://localhost:8080/back-end/vehicle/getData', data, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.setState({
                    results: response.data,
                    vehiclesLoaded: true
                })
            });
    }

    handleClick(reg, make, model, colour, regDate) {

        this.setState({
            vehicleDetails: [],
            detailsLoaded: false
        });
        let data = {
            vehicleRegistrationNo: reg,
            make: make,
            model: model,
            colour: colour,
            registrationDate: regDate
        };
        axios.post('http://localhost:8080/back-end/vehicle/getData', data, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.setState({
                    vehicleDetails: response.data[0],
                    detailsLoaded: true
                })
                console.log('post', this.state.vehicleDetails);
            });
    };

    personClick = (vehicleData) => () => {

        console.log('personclick', vehicleData);

        const data = {
            citizenID: '',
            forenames: vehicleData.forenames,
            surname: vehicleData.surname,
            homeAddress: vehicleData.address,
            dateOfBirth: vehicleData.dateOfBirth,
            placeOfBirth: '',
            sex: ''
          };

        this.props.history.push('/user/home/peopleresults', data);
    }

    render() {
        const vehicleData = this.state.vehicleDetails;
        console.log('results:', this.state.results);
        // const resultArray = this.state.results[0];
        // console.log('result array:', resultArray);

        return (

            <div>
                {this.state.vehiclesLoaded ? (!this.state.results ? (<h3>No results found</h3>) : (
                    <Row>
                        <Col>
                            <Container className='flex-container' id='person-list'>
                                {this.state.results.map(vehicle =>
                                    <Card onClick={() => this.handleClick(vehicle.vehicleRegistrationNo, vehicle.make, vehicle.model,
                                        vehicle.colour, vehicle.registrationDate)}
                                        className='flex-item' id='small-person-card'>
                                        <Row>
                                            <Col>
                                                <MdDirectionsCar className='person-icon' />
                                            </Col>
                                            <Col>
                                                <br />
                                                <h3 className='card-title'>{vehicle.vehicleRegistrationNo} {vehicle.make}</h3>
                                                <p>Click for details</p>
                                            </Col>
                                        </Row>
                                    </Card>
                                )}
                            </Container>
                        </Col>
                        <Col>
                            <Container className='flex-container'>
                                <Card className='flex-item' id='person-card' >
                                    <Row>
                                        <Col>
                                            {this.state.detailsLoaded ? (<MdDirectionsCar className='large-person-icon' />) :
                                                (<img alt='loading' src={loading} className="spinner" id="spinner"/>)}
                                        </Col>
                                        <Col>
                                            <br />
                                            <h1 className='card-title'>{vehicleData !== undefined ?
                                                vehicleData.vehicleRegistrationNo : ' '}</h1>
                                        </Col>
                                    </Row>
                                    <Card.Body>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <h5>Vehicle Registration</h5>{vehicleData !== undefined ?
                                                    vehicleData.vehicleRegistrationNo : ' '}</li>
                                            <li className="list-group-item">
                                                <h5>Make</h5>{vehicleData !== undefined ?
                                                    vehicleData.make : ' '}</li>
                                            <li className="list-group-item">
                                                <h5>Model</h5>{vehicleData !== undefined ?
                                                    vehicleData.model : ' '}</li>
                                            <li className="list-group-item">
                                                <h5>Colour</h5>{vehicleData !== undefined ?
                                                    vehicleData.colour : ' '}</li>
                                            <li className="list-group-item">
                                                <h5>Registration Date</h5>{vehicleData !== undefined ?
                                                    vehicleData.registrationDate : ' '}</li>
                                            <li className="list-group-item">
                                                <h5>Owner</h5><p onClick={this.personClick(vehicleData)}
                                            className='stretched-link link-style'>{vehicleData !== undefined ?
                                                vehicleData.forenames : ' '}{' '} {vehicleData !== undefined ?
                                                    vehicleData.surname : ' '}</p></li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>) 
                ) : (<img alt='loading' src={loading} className="spinner" id="spinner"/>)
                }
            </div>

        )
    }
}

