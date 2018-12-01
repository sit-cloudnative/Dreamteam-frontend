import React from 'react'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'
import { userService } from '../../util/axios'
import Router from 'next/router'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {
                username: '',
                password: ''
            },
            message: ''
        }
        this.axios = {};
        this.handleLogin = this.handleLogin.bind(this)
    }

    async handleLogin (e) {
        e.preventDefault()
        let response = {}
        try{
            response = await this.axios({
                method: 'post',
                data: {
                    username: this.state.username,
                    password: this.state.password
                },
                url: '/login',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('profileId', response.data.username)
            localStorage.setItem('role', response.data.role)
        }catch(e){
            response.status = 404
            response.data = {}
            this.setState({message:'username or password is wrong'})
        }
        if(response.status == 200){
            Router.push('/user')
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        this.axios = userService(token)
        if(token !== null){
            Router.push('/subject')
        }
    }

    render() {
        return (
            <div className="container">
                <Row style={{ paddingTop: '-60px', marginBottom: '-80px' }}>
                    <Col sm="12" md={{ size: 6, offset: 3 }} style={{ textAlign: 'center' }}>
                        <Jumbotron style={{ backgroundColor: 'white' }}>
                            <h4 className="display-4">Dream-Learning</h4>
                            <p className="lead">E-learning of your dreams</p>
                            <hr />
                        </Jumbotron>

                    </Col>

                </Row>

                <div className="d-flex justify-content-center h-100" style={{ paddingTop: 'px' }}>
                    <div className="card" style={{ 
                        width: '350px', justifyContent: 'center', display: 'flex', marginBottom: '20px', backgroundColor: '#f7f7f7', 
                        webkitBoxShadow: '2px 3px 5px 0px rgba(0,0,0,0.4)', mozBoxShadow: '2px 3px 5px 0px rgba(0,0,0,0.4)',boxShadow: '2px 3px 5px 0px rgba(0,0,0,0.4)'
                        }}>
                        <div style={{ backgroundColor: '#f7f7f7', textAlign: 'center', paddingTop: '10px' }}>
                            <img src="../../static/images/logo/user-1.png" width="130" height="121" />
                        </div>
                        <div className="card-body" style={{ backgroundColor: '#f7f7f7' }}>
                            <div style={{ color: 'red' }}>{this.state.message}</div>

                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" onChange={(e) => { this.setState({ username: e.target.value }) }} className="form-control" placeholder="Username" name="username" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} className="form-control" placeholder="Password" name="password" />
                                </div>
                                <div className="form-group">
                                    <Row>
                                        <Col style={{ textAlign: 'center', backgroundColor: '#f7f7f7' }}>
                                            <Button color="primary" onClick={this.handleLogin} size="lg" block>Sign in</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <Row>
                                    <a href="https://github.com/sit-cloudnative/DreamTeam" target="_blank">
                                        <i className="fab fa-github"></i> Dreamteam's GitHub
                                </a>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
