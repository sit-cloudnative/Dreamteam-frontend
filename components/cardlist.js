import React from 'react'
import Card from '../components/card'
import {Col,Row,Container} from 'reactstrap'

export default class Cardlist extends React.Component {
    render() {
        return (
    <div>
        <Container>
            <Row>
                <Col xs='3'>
                    <Card></Card>
                </Col>
                <Col xs='3'>
                    <Card></Card>
                </Col>
                <Col xs='3'>
                    <Card></Card>
                </Col>
                <Col xs='3'>
                    <Card></Card>
                </Col>
            </Row>
        </Container>
    </div>)
    }
}