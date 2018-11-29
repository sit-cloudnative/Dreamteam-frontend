import React from 'react'
import { Row, Col } from 'reactstrap';

import Profileinfo from '../../components/profileinfo'
import ProfileCard from '../../components/profilecard'
import Template from '../../layout/template'
export default class Index extends React.Component {
    render() {
        return (
            <Template>
                <div className='container'>
                    <Row style={{ paddingTop: '20px' }}>
                        <Col xs="4" style={{ textAlign: 'center' }}>
                            <Profileinfo />
                        </Col>
                        <Col xs='7'>
                            <ProfileCard/> 
                        </Col>
                    </Row>
                </div>
            </Template >)
    }
}