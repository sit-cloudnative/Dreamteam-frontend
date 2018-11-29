import React from 'react'
import { Row, Col } from 'reactstrap';
import {userService} from '../../util/axios'
import Profileinfo from '../../components/profileinfo'
import ProfileCard from '../../components/profilecard'
import Template from '../../layout/template'
export default class Index extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            profile: {
                studentId: '',
                firstname: '',
                lastname: '',
                favoriteSubject: [
                    {
                        subjectId: 0,
                        subjectName: ''
                    }
                ]
            },
            isLoading:true
        }
        this.axios = {}
    }

    async componentDidMount() {
        let studentId  = localStorage.getItem('profileId')
        let jwtToken  = localStorage.getItem('token')
        this.axios = userService(jwtToken)
        let { data } = await this.axios.get(`/user/${studentId}`)
        this.setState({
            profile: data,
            isLoading:false
        })
        console.log(this.state.profile)
    }

    render() {
        return (
            <Template>
                <div className='container'>
                    {this.state.isLoading ? 'loading...' :
                        <Row style={{ paddingTop: '20px' }}>
                            <Col xs="4" style={{ textAlign: 'center' }}>
                                <Profileinfo profile={this.state.profile}/>
                            </Col>
                            <Col xs='7'>
                                <ProfileCard profile={this.state.profile}/> 
                            </Col>
                        </Row>
                    }
                </div>
            </Template >)
    }
}