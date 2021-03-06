import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { subjectService, errorChecker } from '../util/axios'
import { Container } from 'reactstrap';
import Router from 'next/router'
import Spiner from '../components/loadingcomponent'
export default class Curriculum extends React.Component {

    constructor() {
        super()
        this.state = {
            curriculum: [],
            subjectList: '',
            curriculumCode: '',
            isLoading: true,
            isSubjectLoading: true
        }
        this.axios = {}
        this.getSubjectList = this.getSubjectList.bind(this)
        this.redirectToVideoListPage = this.redirectToVideoListPage.bind(this)
    }

    async componentDidMount() {
        let token = localStorage.getItem('token')
        this.axios = subjectService(token)
        let response = {}
        try {
            response = await this.axios.get('/curriculums')
        } catch (err) { }
        if (errorChecker(response)) {
            this.setState({
                curriculum: response.data,
                isLoading: false
            })
        }
    }

    async getSubjectList(targetCurriculumId) {
        const { data } = await this.axios.get(`/curriculum/${targetCurriculumId}/subjects`)
        this.setState({ subjectList: data })
    }

    redirectToVideoListPage(targetSubjectId) {
        Router.push({
            pathname: '/videos',
            query: { subject_id: targetSubjectId }
        })
    }
    render() {
        const cardStyle = {
            width: '613px',
            marginTop: '20px',
            height: '539px',
            overflowY: 'scroll',
            overflowX: 'hidden'
        };
        const cardtitleStyle = {
            fontSize: '33px',
            textAlign: 'center'
        };
        const message = {
            width: '100%',
            height: '100%',
            minHeight: '400px',
            display: 'flex',
            display: '-webkit-flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            color: '#d9d9d9',
            fontSize: '30px'
        }

        return (
            <Container fluid>
                <Row>
                    <Col sm="1"></Col>
                    <Col sm="5">
                        <Card style={cardStyle} body>
                            <CardTitle style={cardtitleStyle}><i className="fas fa-graduation-cap"></i> Curriculum</CardTitle>
                            {
                                (this.state.isLoading) ? <Spiner /> : this.state.curriculum.map((c, key) => (
                                    <Button className="backToHome" onClick={() => { this.getSubjectList(c.curriculumId) }} key={key} style={{ paddingBottom: '35px', marginTop: '11px', textAlign: 'left', width: '555px', textOverflow: 'ellipsis', overflow: 'hidden' }}> <i className="fas fa-graduation-cap fa-2x"></i>{c.curriculumName}</Button>
                                ))
                            }
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card style={cardStyle} body>
                            <CardTitle style={cardtitleStyle}><i className="fas fa-book fa-1x"></i> Subject</CardTitle>
                            {this.state.subjectList == '' ? (<div style={message}>
                                <i style={{
                                    marginRight: '15px'
                                }} className="fas fa-arrow-left"></i>Please select a curriculum
                            </div>) : (
                                    this.state.subjectList.map((s, key) => (
                                        <Button className="backToHome" onClick={() => { this.redirectToVideoListPage(s.subjectId) }} key={key} style={{ paddingBottom: '35px', marginTop: '11px', textAlign: 'left', width: '555px' }}> <i className="fas fa-graduation-cap fa-2x"></i>{s.subjectName}</Button>
                                    ))
                                )}

                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
