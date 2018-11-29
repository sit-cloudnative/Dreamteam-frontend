import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
const video = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="4"></Col>
                <Col xs="4">
                    <Card>
                        <CardImg top width="100%" src="https://image.ibb.co/dG2XCA/boy.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <CardText>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </CardText>
                        </CardBody>
                    </Card></Col>
                <Col xs="4"></Col>


            </Row>
        </Container>);
};

export default video;