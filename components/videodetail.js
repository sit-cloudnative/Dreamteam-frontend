import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'

const card = (props) => {
    const videoStyle = {
        height: '350px',
        marginLeft: '25px',
        marginTop: '15px'

    };
    const videoStyle2 = {
        height: '300px',
        marginLeft: '7px',
        marginTop: '10px',
        marginRight: '20px'

    };
    const cardStyle = {
        marginTop: '100px'
    };
    return (
        <Container fluid>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                    <Card style={cardStyle}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=v2wYgfKe_nk' playing controls style={videoStyle} />

                        <CardBody>
                            <hr />
                            <CardTitle>INT202</CardTitle>
                            <CardText>Teacher :</CardText>
                            <CardText>
                                <small className="text-muted">Date : </small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="3">
                    <Card style={cardStyle}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=v2wYgfKe_nk' controls style={videoStyle2} width="50" />
                        <CardBody>
                            <CardTitle>Video Details</CardTitle>
                            <CardText>
                                <small className="text-muted">Date :</small>
                            </CardText>
                        </CardBody>
                    </Card></Col>


            </Row>
        </Container>);
};

export default card;