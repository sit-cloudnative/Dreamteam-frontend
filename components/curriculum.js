import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Container } from 'reactstrap';
export default class Curriculum extends React.Component {

    constructor() {
        super()
        this.state = {
            curriculum: [],
            subjectList: [],
            curriculumCode: ''
        }
        // this.getSubjectList = this.getSubjectList.bind(this)
    }

    async componentDidMount() {
        let { data } = await axios.get('/curriculums')
        this.setState({
            curriculum: { data }.data
        })
    }

    async getSubjectList(targetCurriculumId) {
        const { data } = await axios.get('/curriculum/' + targetCurriculumIds)
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
            marginTop: '100px'
        };
        const cardtitleStyle = {
            fontSize: '42px',
            textAlign: 'center'
        };
        return (
            <Container fluid>
                <Row>
                    <Col sm="6">
                        <Card style={cardStyle} body>
                            <CardTitle style={cardtitleStyle}><i class="fas fa-graduation-cap" fa-3x></i> Curriculum</CardTitle>
                            
                            <Button className="btn-dark"><i class="fas fa-graduation-cap fa-2x"></i>  B.Sc.IT Students</Button>
                        </Card>
                    </Col>
                    <Col sm="6">
                        <Card body style={cardStyle}>
                            <CardTitle style={cardtitleStyle}><i class="fas fa-book fa-1x"></i> Subject</CardTitle>
                            <Button className="btn-dark"><i class="fas fa-book fa-2x"></i>  INT202</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
