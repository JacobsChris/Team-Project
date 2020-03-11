import React from 'react';
import axios from 'axios';
import SearchPeople from './SearchPeople';
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
            personDetails: []
        };
    };

    handleClick(id, forename, surname, address, dob, pob, gender) {
        this.setState({
            personDetails: []
        })
        let data = {
            citizenID: id, forenames: forename, surname: surname, homeAddress: address,
            dateOfBirth: dob, placeOfBirth: pob, sex: gender
        };
        axios.post('http://localhost:8080/back-end/person/getData', data, {
            headers: {
                Authorization: sessionStorage.jwt
            }
        })
        .then((response) => {
          this.setState({
            personDetails: this.state.personDetails.concat(response)                 
          })
          console.log(this.state.personDetails);
        })
    };

    render() {
        return (
            <div>
                {!this.props.resultsLoading ? (this.props.results.length === 0 ? (<h3>No results found</h3>) : (
                    <Row>
                        <Col>
                            <Row>
                                <Container className='flex-container' id='small-search'>
                                    <SearchPeople />
                                </Container>
                            </Row>
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
                                                    <h3 className='card-title'>{person.forenames} {person.surname}</h3>
                                                </Col>
                                            </Row>
                                        </Card>
                                    )}
                                </Container>
                            </Row>
                        </Col>
                        <Col>
                            <Container className='flex-container'>
                                {this.state.personDetails.map(results => results.data.map(person =>
                                    <Card className='flex-item' id='person-card' >
                                        <Row>
                                            <Col>
                                                <MdPerson className='large-person-icon' />
                                            </Col>
                                            <Col>
                                                <br />
                                                <h1 className='card-title'>{person.forenames} {person.surname}</h1>
                                            </Col>
                                        </Row>
                                        <Card.Body>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <h5>Gender</h5>{
                                                        [person.sex]}</li>
                                                <li className="list-group-item">
                                                    <h5>Home Address</h5>{
                                                        [person.homeAddress]}</li>
                                                <li className="list-group-item">
                                                    <h5>Date of Birth</h5>
                                                    {[person.dateOfBirth]}</li>
                                                <li className="list-group-item">
                                                    <h5>Place of Birth</h5>
                                                    {[person.placeOfBirth]}</li>
                                                <li className="list-group-item">
                                                    <h5>Associates</h5>
                                                    {[person.associates]}</li>
                                                <li className="list-group-item">
                                                    <h5>Vehicles</h5>
                                                    {[person.vehicles]}</li>
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

PeopleResultsPage.propTypes = {
    results: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(PeopleResultsPage);


