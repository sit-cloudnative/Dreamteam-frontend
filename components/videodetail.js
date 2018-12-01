import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'
import {videoService, errorChecker, subjectService} from '../util/axios'
import { withRouter } from 'next/router'
import moment from 'moment'
import Router from 'next/router'


class VideoCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            video: {},
            isLoading: true,
            nextVideos: []
        }
        this.axios = {}
    }

    async componentDidMount() {
        let targetVideo = this.props.videoId
        let token = localStorage.getItem('token') || ''
        this.axios = videoService(token)
        let response = {}
        try{
            response = await this.axios.get(`/video/${targetVideo}`)
            let courseCode = response.data.videoName.replace(/\W/g, '').substr(0, 6)
            console.log(courseCode)
            this.axios = subjectService(token)
            const { data } = await this.axios.get(`/subjects`, {
                params: {
                    keyword: courseCode.trim()
                }
            })
            console.log(data)
            this.axios = videoService(token)
            const videos = await this.axios.get(`/subject/${data[0].subjectId}/videos`)
            const nextVideos = videos.data.filter(video => {
                return video.videoId > response.data.videoId
            })
            const reverseNextVideos = nextVideos.reverse().slice(0, 11)
            console.log(reverseNextVideos)
            this.setState({
                nextVideos: reverseNextVideos
            })

        } catch (err) { }
        if (errorChecker(response)) {
            this.setState({
                video: response.data,
                isLoading: false
            })
        }
        console.log(this.state.video)
    }

    redirectVideo(id) {
        console.log(id)
        Router.push({
            pathname: '/video',
            query: { video_id: id }
        })
        window.location.reload()
    }


    render() {
        const videoStyle = {
            width: '585px',
            height: 'auto',
            marginLeft: '75px',
            marginTop: '5px',

        };
        const videoStyle2 = {
            height: '300px',
            marginLeft: '7px',
            marginTop: '10px',
            marginRight: '20px'

        };
        const cardStyle = {
            marginTop: '15px',
            webkitBoxShadow: '2px 3px 5px 0px rgba(0,0,0,0.1)', mozBoxShadow: '2px 3px 5px 0px rgba(0,0,0,0.1)', boxShadow: '2px 3px 5px 0px rgba(0,0,0,0.1)'
        };
        const cardtitleStyle = {
            marginTop: '10px',
            fontSize: '30px',
            textAlign: 'left',
            marginLeft: '50px'
        };
        const nextVideos = this.state.nextVideos.map(nextVideo => {
            return (
                <Card style={{cursor: 'pointer'}} onClick={() => {this.redirectVideo(nextVideo.videoId)}} key={nextVideo.id}>
                    <CardBody>
                        <Row>
                            <Col xs='5'>
                                <CardImg src={nextVideo.videoThumbnail}></CardImg>
                            </Col>
                            <Col xs='7'>
                                <CardTitle>{nextVideo.videoName.substr(0, 15)+'...'}</CardTitle>
                                <CardText>
                                    <small className="text-muted">Date : {moment(nextVideo.videoDate).format('DD-MM-YYYY')}</small>
                                </CardText>    
                            </Col>
                        </Row>
                        
                    </CardBody>
                </Card>
            )
        })
        return(
            <Container fluid>
            <Row>
                <Col xs="3"></Col>
                <Col xs="6">
                    <Card style={cardStyle}>
                        <CardTitle style={cardtitleStyle}><i className="fas fa-video"></i> {this.state.video.videoName}</CardTitle>
                        <ReactPlayer width={588} url={this.state.video.videoPath} playing controls style={videoStyle} />

                            <CardBody>
                                <hr />

                            <CardText>Teacher : {this.state.video.lecturer}</CardText>
                            <CardText>
                                <small className="text-muted">Date : {this.state.video.period}</small>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="3">
                    {nextVideos}
                </Col>
            </Row>
        </Container>
        )
    }
}

export default withRouter(VideoCard);