import React from 'react'
import Card from '../components/card'
import {Col,Row,Container} from 'reactstrap'
import {videoService} from '../util/axios'

export default class Cardlist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            targetSubject:'',
            videoList: [],
            subjectName: '',
        }
        this.axios = {}
    }
    
    async componentDidMount () {
        let subjectId = this.props.subjectId
        let token = localStorage.getItem('token')
        this.axios  = videoService(token)
        let {data} = await this.axios.get(`/subject/${subjectId}/videos`)
        this.setState({videoList:data})
        let subjectTitle = data[0].videoName
        this.props.changeVideoTitle(subjectTitle)
        console.log()
    }
    render() {
        return (
    <div>
        <Container>
            <Row>
                {this.state.videoList.map((video,key) =>(
                <Col xs='3' key={key}>
                    <Card video={video}/>
                </Col>
                ))}
            </Row>
        </Container>
    </div>)
    }
}