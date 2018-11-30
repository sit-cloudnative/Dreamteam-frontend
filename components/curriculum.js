import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {subjectService} from '../util/axios'
import { Container } from 'reactstrap';
import Router from 'next/router'
import ReactLoading from "react-loading";
import { width } from 'window-size';


export default class Curriculum extends React.Component {

    constructor() {
        super()
        this.state = {
            curriculum: [],
            subjectList: [],
            curriculumCode: '',
            isLoading:true
        }
        this.axios = {}
        this.getSubjectList = this.getSubjectList.bind(this)
        this.redirectToVideoListPage = this.redirectToVideoListPage.bind(this)
    }

    async componentDidMount() {
        let token = localStorage.getItem('token')
        this.axios = subjectService(token)
        let { data } = await this.axios.get('/curriculums')
        this.setState({
            curriculum: data
        })
        console.log(this.state.curriculum)
    }

    async getSubjectList(targetCurriculumId) {
        const { data } = await this.axios.get(`/curriculum/${targetCurriculumId}/subjects`)
        this.setState({ subjectList: data })
        console.log(data)
    }

    redirectToVideoListPage(targetSubjectId) {
        console.log(targetSubjectId)
        Router.push({
            pathname: '/videos',
            query: { subject_id: targetSubjectId }
        })
    }
    render() {
        const cardStyle = {
            marginTop: '100px',
            height:'539px',
            overflowY:'scroll',
            overflowX:'hidden'
        };
        const cardtitleStyle = {
            fontSize: '42px',
            textAlign: 'center'
        };
        const loadingStyle = {
                minHeight: '400px',
                display:'flex',
                display:'-webkit-flex',
                flexWrap:'wrap',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                alignContent:'center'
        }
        return (
            <Container fluid>
                <Row>   
                    <Col sm="6">
                        <Card style={cardStyle} body>
                            <CardTitle style={cardtitleStyle}><i className="fas fa-graduation-cap"></i> Curriculum</CardTitle>
                            {/* {this.state.curriculum.map( (c,key) => (
                                <Button className="btn" onClick={() => {this.getSubjectList(c.curriculumId)}} key={key} style={{marginTop:'11px',textAlign:'left' ,backgroundColor:'#0091ac' ,width:'555px'}}> <i className="fas fa-graduation-cap fa-2x"></i>{c.curriculumName}</Button>
                            ))} */}
                            loading
                            <div style={{width:'100%',height:'100%'}}>
                            <ReactLoading type={'spin'} color={'#0091ac'} />
                            </div>

                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body style={cardStyle}>
                            <CardTitle style={cardtitleStyle}><i className="fas fa-book fa-1x"></i> Subject</CardTitle>
                            {this.state.subjectList.map( (s,key) => (
                                <Button className="btn" onClick={()=> {this.redirectToVideoListPage(s.subjectId)}} key={key} style={{marginTop:'11px',textAlign:'left' ,backgroundColor:'#0091ac',width:'555px' }}> <i className="fas fa-graduation-cap fa-2x"></i>{s.subjectName}</Button>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
