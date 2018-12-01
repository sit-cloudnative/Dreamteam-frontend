import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player'
import {videoService, errorChecker} from '../util/axios'
import { withRouter } from 'next/router'


class VideoCard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            video: {},
            isLoading: true
        }
        this.axios = {}
    }

    async componentDidMount(){
        let targetVideo = this.props.videoId
        let token = localStorage.getItem('token')
        this.axios = videoService(token)
        let response = {}
        try{
            response = await this.axios.get(`https://dreamteam-videoservice.mybluemix.net/video/${targetVideo}`)

        }catch(err){}
        if(errorChecker(response)){
            this.setState({
                video: response.data,
                isLoading:false
            })
        }
        console.log(this.state.video)
    }

    render() {
        const videoStyle = {
            width:  '585px',
            height: 'auto',
            marginLeft: '25px',
            marginTop: '5px',
            
        };
        const videoStyle2 = {
            height: '300px',
            marginLeft: '7px',
            marginTop: '10px',
            marginRight: '20px'
    
        };
        const cardStyle = {
            marginTop: '100px',
            webkitBoxShadow: '2px 3px 5px 0px rgba(0,0,0,0.1)', mozBoxShadow: '2px 3px 5px 0px rgba(0,0,0,0.1)',boxShadow: '2px 3px 5px 0px rgba(0,0,0,0.1)'
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
                        <ReactPlayer width={588} url={this.state.video.videoPath} controls style={videoStyle} />

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