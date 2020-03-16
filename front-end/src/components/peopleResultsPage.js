import React from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/peopleResults.css';
import { MdPerson } from 'react-icons/md';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    results: state.response.results,
    resultsLoading: state.response.resultsLoading
});

class PeopleResultsPage extends React.Component {
    constructor(props) {
        super(props);
        console.log('prp props:', props);
        this.state = {
            personDetails: {
                citizenData: [],
                bankAccountData: [],
                mobilesData: [],
                vehicleData: []
            },
            detailsLoaded: true
        };
    };

    handleClick = (person) => {
        this.setState({
            personDetails: {
                citizenData: [],
                bankAccountData: [],
                mobilesData: []
            },
            detailsLoaded: false
        });
        axios.post('http://localhost:8080/back-end/person/getMatching', person, {
            headers: {
                Authorization: sessionStorage.jwt
            }
        })
            .then((response) => {
                this.setState({ 
                    personDetails: response.data,
                    detailsLoaded: true
                })
            })
    };


    getAcquaintances = (acquaintancesData) => {
        if (acquaintancesData && acquaintancesData.length > 0 ) {
            return (
                acquaintancesData[0].forenames + ' ' + acquaintancesData[0].surname + ', ' +
                acquaintancesData[1].forenames + ' ' + acquaintancesData[1].surname + ', ' +
                acquaintancesData[2].forenames + ' ' + acquaintancesData[2].surname
            );
        } else if (this.state.detailsLoaded){
            return '';
        }
    }

    getVehicles = (vehicleData) => {
        if (vehicleData && vehicleData.length > 0 ){
            for(let i = 0; i < vehicleData.length; i++){
                return (
                    vehicleData[i].vehicleRegistrationNo
                );
            }
        } else if (this.state.detailsLoaded){
            return '';
        }
    }

    vehicleClick = (vehicleData) => () => {

        console.log('plate', vehicleData[0].vehicleRegistrationNo);

        this.props.history.push('/user/home/vehicleresults?plate=' + vehicleData[0].vehicleRegistrationNo);
    }

    render() {
        console.log('PD', this.state.personDetails);
        const { citizenData: [citizen = {}] } = this.state.personDetails;
        const { bankAccountData: [personBank = {}] } = this.state.personDetails;
        const { mobilesData: [personMobile = {}] } = this.state.personDetails;
        const { acquaintancesData } = this.state.personDetails;
        const { vehicleData } = this.state.personDetails;

        return (
            <div>
                {!this.props.resultsLoading ? (this.props.results.length === 0 ? (<h3>No results found</h3>) : (
                    <Row>
                        <Col>
                            <Row>
                                <Container className='flex-container' id='person-list'>
                                    {this.props.results?.map(person =>
                                        <Card onClick={() => this.handleClick(person)}
                                            className='flex-item' id='small-person-card'>
                                            <Row>
                                                <Col>
                                                    <MdPerson className='person-icon' />
                                                </Col>
                                                <Col>
                                                    <br />
                                                    <h4 className='card-title'>{person.forenames} {person.surname}</h4>
                                                    <p>Click for details</p>
                                                </Col>
                                            </Row>
                                        </Card>
                                    )}
                                </Container>
                            </Row>
                        </Col>
                        <Col>
                            <Container className='flex-container'>
                                <Card className='flex-item' id='person-card' >
                                    <Row>
                                        <Col>
                                            {this.state.detailsLoaded ? (<MdPerson className='large-person-icon' />) :
                                                (<h3>Loading</h3>)}
                                        </Col>
                                        <Col>
                                            <br />
                                            <h1 className='card-title'>{citizen.forenames} {citizen.surname}</h1>
                                        </Col>
                                    </Row>
                                    <Card.Body>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Gender: {citizen.sex}</li>
                                            <li className="list-group-item">Home Address: {citizen.homeAddress}</li>
                                            <li className="list-group-item">Date of Birth: {citizen.dateOfBirth}</li>
                                            <li className="list-group-item">Place of Birth: {citizen.placeOfBirth}</li>
                                            <li className="list-group-item">Bank: {personBank && personBank.length > 0 ?
                                                personBank.bank : ''}</li>
                                            <li className="list-group-item">Account Number: {personBank && personBank.length > 0 ?
                                                personBank.accountNumber : ''}</li>
                                            <li className="list-group-item">Mobile Number: {personMobile && personMobile.length > 0?
                                                personMobile.phoneNumber : ''}</li>
                                            <li className="list-group-item">Associates: {this.getAcquaintances(acquaintancesData)}</li>
                                            <li className="list-group-item">Vehicles: <a onClick={this.vehicleClick(vehicleData)}
                                            className='stretched-link link-style'>{this.getVehicles(vehicleData)}</a> </li>
                                            <li className="list-group-item">Recent locations: </li>
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

PeopleResultsPage.propTypes = {
    results: PropTypes.array.isRequired,
    getVehicle: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(PeopleResultsPage);



