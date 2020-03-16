import React from 'react';
import axios from 'axios';
import SearchVehicle from './searchVehicle';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/peopleResults.css';
import { MdDirectionsCar } from 'react-icons/md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    results: state.vehicle.results,
    resultsLoading: state.response.resultsLoading
});

class VehicleResultsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            vehicleDetails: [],
            detailsLoaded: true
        };
    };

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
                Authorization: sessionStorage.jwt
            }
        })
            .then((response) => {
                this.setState({
                    vehicleDetails: response.data,
                    detailsLoaded: true
                })
                console.log('post', this.state.vehicleDetails);
            });
    };

    render() {
        const vehicleData = this.state.vehicleDetails;
        console.log('render', vehicleData);
        console.log(this.props.resultsLoading);
        console.log('results:', this.props.results);

        return (

            <div>
                {!this.props.resultsLoading ? (!this.props.results ? (<h3>No results found</h3>) : (
                    <Row>
                        <Col>
                            <Container className='flex-container' id='person-list'>
                                {this.props.results?.map(vehicle =>
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
                                                (<h3>Loading</h3>)}
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
                                                <h5>Owner</h5>{vehicleData !== undefined ?
                                                    vehicleData.forenames : ' '}{' '} {vehicleData !== undefined ?
                                                    vehicleData.surname : ' '}</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                )
                ) : (<h3>Loading</h3>)};
            </div>

        )
    }
}

VehicleResultsPage.propTypes = {
    results: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(VehicleResultsPage);


