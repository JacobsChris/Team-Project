import React from 'react';
import axios from 'axios';
import SearchPeople from './SearchPeople';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../styles/peopleResults.css';
import { MdPerson } from 'react-icons/md';
import { encodeQueryParams, stringify, StringParam } from 'serialize-query-params';
export default class PeopleResultsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            personDetails: []
        };
    };

    componentDidMount() {
        let data = {
            citizenID: "", forenames: "Stuart", surname: "White", homeAddress: "46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG",
            dateOfBirth: "1948-10-02", placeOfBirth: "STANMORE", sex: "Male"
        };
        axios.get('http://localhost:3000/back-end/person/getData?' + stringify(encodeQueryParams({
            citizenID: StringParam, forenames: StringParam, surname: StringParam, homeAddress: StringParam,
            dateOfBirth: StringParam, placeOfBirth: StringParam, sex: StringParam
        }, data)))
            .then((response) => {
                this.setState({
                    results: this.state.results.concat(response)
                })
                console.log(this.state.results);
            })
    };

    // handleClick(id){
    //     axios.get()
    //     .then((response) => {
    //       this.setState({
    //         personDetails: this.state.personDetails.concat(response),                 
    //       })
    //       console.log(this.state.personDetails);
    //     })
    // };



    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Row>
                            <Container className='flex-container' id='small-search'>
                                <SearchPeople />
                            </Container>
                        </Row>
                        <Row>
                            <Container className='flex-container' id='person-list'>
                                {this.state.results.map(person =>
                                    <Card className='flex-item' id='small-person-card'>
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
                            {this.state.personDetails.map(person =>
                                <Card className='flex-item' id='person-card'>
                                    <Row>
                                        <Col>
                                            <MdPerson className='large-person-icon' />
                                        </Col>
                                        <Col>
                                            <br />
                                            <h1 className='card-title'>{person.forename} {person.surname}</h1>
                                        </Col>
                                    </Row>
                                    <Card.Body>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><h5>Home Address</h5>{[person.address]}</li>
                                            <li class="list-group-item">
                                                <h5>Date of Birth</h5>
                                                {[person.dateOfBirth]}</li>
                                            <li class="list-group-item">
                                                <h5>Place of Birth</h5>
                                                {[person.placeOfBirth]}</li>
                                            <li class="list-group-item">
                                                <h5>Associates</h5>
                                                {[person.associates]}</li>
                                            <li class="list-group-item">
                                                <h5>Vehicles</h5>
                                                {[person.vehicles]}</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            )}
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}