import React from 'react';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/peopleResults.css';
import { MdPerson } from 'react-icons/md';

export default class PeopleResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            personDetails: {
                citizenData: [],
                bankAccountData: [],
                mobilesData: [],
                vehicleData: []
            },
            detailsLoaded: true,
            peopleLoaded: false
        };
    };

    componentDidMount() {
        axios.post('http://localhost:8080/back-end/person/getData', this.props.location.state, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.setState({
                    results: response.data,
                    peopleLoaded: true
                })
                console.log('response', this.state.results);
            });
    }

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
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                this.setState({ 
                    personDetails: response.data,
                    detailsLoaded: true
                })
                console.log('details', this.state.personDetails);
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

        this.props.history.push('/user/home/vehicleresults?plate=' + vehicleData[0].vehicleRegistrationNo);
    }

    render() {
        const { citizenData: [citizen = {}] } = this.state.personDetails;
        const { bankAccountData } = this.state.personDetails;
        const { mobilesData } = this.state.personDetails;
        const { acquaintancesData } = this.state.personDetails;
        const { vehicleData } = this.state.personDetails;
        console.log(bankAccountData);

        return (
            <div>
                {this.state.peopleLoaded ? (!this.state.results ? (<h3>No results found</h3>) : (
                    <Row>
                        <Col>
                            <Row>
                                <Container className='flex-container' id='person-list'>
                                    {this.state.results?.map(person =>
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
                                            <li className="list-group-item">Bank: {bankAccountData && bankAccountData.length > 0 ?
                                                bankAccountData[0].bank : ''}</li>
                                            <li className="list-group-item">Account Number: {bankAccountData && bankAccountData.length > 0 ?
                                                bankAccountData[0].accountNumber : ''}</li>
                                            <li className="list-group-item">Mobile Number: {mobilesData && mobilesData.length > 0?
                                                mobilesData[0].phoneNumber : ''}</li>
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




