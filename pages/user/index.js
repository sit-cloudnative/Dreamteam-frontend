import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Template from '../../layout/template'
export default class Index extends React.Component {
    render() {
        return (
            <Template>
                <div className='container'>
                    <Row style={{ paddingTop: '20px' }}>
                        <Col xs="4" style={{ textAlign: 'center' }}>
                            <img style={{ borderRadius: '50%' }} src="../../static/images/avatar/user1.jpg" width="180" height="171" />
                            <h3>Tanapat Choochot</h3>
                            <h6>@59130500128</h6>
                            <hr />
                            <button type="button" className="btn btn-outline-danger">My Favorite Subjects</button>

                        </Col>
                        <Col xs='7'>
                            <Card style={{ backgroundColor: '' }}>
                                {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                                <CardBody>
                                    <h3>My Profile</h3>
                                    <hr />
                                    <Form>
                                        <FormGroup>
                                            <Label for="firstname">Firstname</Label>
                                            <Input type="text" name="firstname" value="Tanapat" disabled />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="lastname">Lastname</Label>
                                            <Input type="text" name="lastname" id="lastname" value="Choochot" disabled />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="Year">Year</Label>
                                            <Input type="number" name="year" id="Year" value="3" disabled />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="Department">Department</Label>
                                            <Input type="text" name="department" id="department" value="IT" disabled />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="Faculty">Faculty</Label>
                                            <Input type="text" name="faculty" id="faculty" value="SIT" disabled />
                                        </FormGroup>
                                        <Row>
                                            <Col style={{ textAlign: 'center' }}>
                                                <Button color="primary" size="lg" block>Back to Home</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Template >)
    }
}