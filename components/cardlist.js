import React from 'react'
import Card from '../components/card'
import {Col,Row,Container} from 'reactstrap'
import Notfound from '../components/notfound'
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
                {this.props.videoList == 'notfound' ? <Notfound message={'subject id not found'} />:(
                    this.props.videoList.map((video,key) =>(
                        <Col xs='3' key={key}>
                            <Card video={video}/>
                        </Col>
                        ))
                )}
            </Row>
        </Container>
    </div>)
    }
}