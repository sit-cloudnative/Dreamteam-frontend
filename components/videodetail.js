import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'
import {videoService} from '../util/axios'
import { withRouter } from 'next/router'


class VideoCard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            video: {}
        }
        this.axios = {}
    }

    async componentDidMount(){
        console.log(this.props.videoId)
        let targetVideo = this.props.videoId
        let token = localStorage.getItem('token')
        this.axios = videoService(token)
        let {data} = await this.axios.get(`https://dreamteam-videoservice.mybluemix.net/video/${targetVideo}`)
        console.log('**********************targetVideo******************')
        console.log(targetVideo)
        console.log(data)
        this.setState({
            video: data
        })
        console.log(this.state.video)
    }

    render() {
        const videoStyle = {
            height: '350px',
            marginLeft: '25px',
            marginTop: '5px'
    
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
        const cardtitleStyle = {
            marginTop: '10px',
            fontSize: '30px',
            textAlign: 'left',
            marginLeft: '50px'
        };
        return(
            <Container fluid>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                    <Card style={cardStyle}>
                        <CardTitle style={cardtitleStyle}><i className="fas fa-video"></i> {this.state.video.videoName}</CardTitle>
                        <ReactPlayer url={this.state.video.videoPath} controls style={videoStyle} />

                        <CardBody>
                            <hr />

                            <CardText>Teacher : {this.state.video.lecturer}</CardText>
                            <CardText>
                                <small className="text-muted">Date : </small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="3">
                    <Card style={cardStyle}>
                        {/* <ReactPlayer url='https://www.youtube.com/watch?v=v2wYgfKe_nk' controls style={videoStyle2} width="50" height="50" /> */}
                        <CardBody>
                            <hr />
                            <CardTitle >INT 202 EP.2</CardTitle>
                            <CardText>
                                <small className="text-muted">Date :</small>
                            </CardText>
                        </CardBody>
                    </Card></Col>


            </Row>
        </Container>
        )
    }
}

export default withRouter(VideoCard);