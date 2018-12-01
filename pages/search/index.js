import React from 'react'
import Template from '../../layout/template';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Router, { withRouter } from 'next/router'
import { subjectService } from '../../util/axios';

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subjects: []
        }
        this.axios = {}
    }
    async componentDidMount() {
        const { router } = this.props
        const token = localStorage.getItem('token') || ''
        this.axios = subjectService(token)
        const { data } = await this.axios.get(`/subjects`, {
            params: {
                keyword: router.query.keyword
            }
        })
        this.setState({
            subjects: data
        })
    }
    onSelectSubject(id) {
        Router.push({
            pathname: '/videos',
            query: {
                subject_id: id
            }
        })
    }
    render() {
        const searchSubjects = this.state.subjects.map(subject => {
            return (
                <Col xs='3'>
                    <Card style={{cursor: 'pointer'}} onClick={() => {this.onSelectSubject(subject.subjectId)}}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{subject.subjectCode}</CardTitle>
                            <CardSubtitle>{subject.subjectName}</CardSubtitle>
                        </CardBody>
                    </Card>
                </Col>
            )
        })
        return (
            <Template>
                <Col xs={{size: 10, offset: 1}} style={{marginTop: '20px'}}>
                    <Row>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                Search Result: {this.state.subjects.length} item(s) display
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        {searchSubjects}
                    </Row>
                </Col>
            </Template>
        )
    }
}
export default withRouter(Search)