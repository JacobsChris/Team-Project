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
            vehicleDetails: []
        };
        console.log(this.props);
    };

    handleClick(reg, make, model, colour, regDate) {
        if(this.state.vehicleDetails.length < 1){
            console.log(this.state.vehicleDetails.length);
        // this.setState({
        //     vehicleDetails: []
        // })
        let data = {
            vehicleRegistrationNo: reg, make: make, model: model, colour: colour,
            registrationDate: regDate
        };
        console.log(data.vehicleRegistrationNo.length);
        if(this.state.vehicleDetails.vehicleRegistrationNo != reg){
        axios.post('http://localhost:8080/back-end/vehicle/getData', data, {
            headers: {
                Authorization: sessionStorage.jwt
            }
        })
        .then((response) => {
          this.setState({
            vehicleDetails: this.state.vehicleDetails.concat(response)                 
          })
          console.log(this.state.vehicleDetails);
        });
    }
    }
    };

    render() {
        // console.log(this.props.results)
        return (
            
            <div>
                {!this.props.resultsLoading ? (this.props.results.length === 0 ? (<h3>No results found</h3>) : (
                    <Row>
                        <Col>
                            <Row>
                                <Container className='flex-container' id='small-search'>
                                    <SearchVehicle />
                                </Container>
                            </Row>
                            <Row>                            
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
                                                </Col>
                                            </Row>
                                        </Card>
                                    )}
                                </Container>
                                
                            </Row>
                        </Col>
                        <Col>
                            <Container className='flex-container'>
                                {this.state.vehicleDetails.map(results => results.data.map(vehicle =>
                                    <Card className='flex-item' id='person-card' >
                                        <Row>
                                            <Col>
                                                <MdDirectionsCar className='large-person-icon' />
                                            </Col>
                                            <Col>
                                                <br />
                                                <h1 className='card-title'>{vehicle.vehicleRegistrationNo} {vehicle.make}</h1>
                                            </Col>
                                        </Row>
                                        <Card.Body>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <h5>Vehicle Registration</h5>{
                                                        [vehicle.vehicleRegistrationNo]}</li>
                                                <li className="list-group-item">
                                                    <h5>Make</h5>{
                                                        [vehicle.make]}</li>
                                                <li className="list-group-item">
                                                    <h5>Model</h5>
                                                    {[vehicle.model]}</li>
                                                <li className="list-group-item">
                                                    <h5>Colour</h5>
                                                    {[vehicle.colour]}</li>
                                                <li className="list-group-item">
                                                    <h5>Registration Date</h5>
                                                    {[vehicle.registrationDate]}</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Container>
                        </Col>
                    </Row>
                )
                ): (<h3>Loading</h3>)};
            </div>

        )
    }
}

VehicleResultsPage.propTypes = {
    results: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(VehicleResultsPage);


