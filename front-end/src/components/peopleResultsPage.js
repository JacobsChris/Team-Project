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

        this.state = {
            personDetails: {
                citizenData: [],
                bankAccountData: [],
                mobilesData: []
            },
            detailsLoaded: true
        };
    };

    handleClick(id, forename, surname, address, dob, pob, gender) {
        this.setState({
            personDetails: {
                citizenData: [],
                bankAccountData: [],
                mobilesData: []
            },
            detailsLoaded: false
        });
        let data = {
            citizenID: id, forenames: forename, surname: surname, homeAddress: address,
            dateOfBirth: dob, placeOfBirth: pob, sex: gender
        };
        axios.post('http://localhost:8080/back-end/person/getMatching', data, {
            headers: {
                Authorization: sessionStorage.jwt
            }
        })
            .then((response) => {
                console.log(response);
                this.setState({
                    personDetails: response.data,
                    detailsLoaded: true
                })

            })
    };

    render() {
        console.log('PD', this.state.personDetails);

        const { citizenData: person } = this.state.personDetails;
        const { bankAccountData: personBank } = this.state.personDetails;
        const { mobilesData: personMobile } = this.state.personDetails;
        return (
            <div>
                {!this.props.resultsLoading ? (this.props.results.length === 0 ? (<h3>No results found</h3>) : (
                    <Row>
                        <Col>
                            {/* <Row>
                                <Container className='flex-container' id='small-search'>
                                    <SearchPeople />
                                </Container>
                            </Row> */}
                            <Row>
                                <Container className='flex-container' id='person-list'>
                                    {this.props.results?.map(person =>
                                        <Card onClick={() => this.handleClick(person.citizenID, person.forenames, person.surname,
                                            person.homeAddress, person.dateOfBirth, person.placeOfBirth, person.sex)}
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
                                            <h1 className='card-title'>{person.forenames} {person.surname}</h1>
                                        </Col>
                                    </Row>
                                    <Card.Body>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Gender: {person.sex}</li>
                                            <li className="list-group-item">Home Address: {person.homeAddress}</li>
                                            <li className="list-group-item">Date of Birth: {person.dateOfBirth}</li>
                                            <li className="list-group-item">Place of Birth: {person.placeOfBirth}</li>
                                            <li className="list-group-item">Bank: {personBank !== undefined ?
                                                personBank.bank : 'none'}</li>
                                            <li className="list-group-item">Account Number: {personBank !== undefined ?
                                                personBank.accountNumber : 'none'}</li>
                                            <li className="list-group-item">Mobile Number: {personMobile !== undefined ? 
                                                personMobile.phoneNumber : 'none'}</li>
                                            <li className="list-group-item">Associates: {person.associates}</li>
                                            <li className="list-group-item">Vehicles: {person.vehicles}</li>
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
};

export default connect(mapStateToProps)(PeopleResultsPage);


