import React from 'react'
import Card from '../components/card'
import {Col,Row,Container} from 'reactstrap'
import {videoService} from '../util/axios'

export default class Cardlist extends React.Component {
    constructor(props){
        super(props)
        this.axios = {}
    }
    

    render() {
        return (
    <div>
        <Container>
            <Row>
                {this.props.videoList.map((video,key) =>(
                <Col xs='3' key={key}>
                    <Card video={video}/>
                </Col>
                ))}
            </Row>
        </Container>
    </div>)
    }
}