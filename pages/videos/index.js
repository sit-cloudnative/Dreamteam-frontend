import React from 'react'
import Card from '../../components/card'
import Template from '../../layout/template'
import Cardlist from '../../components/cardlist'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { withRouter } from 'next/router'

let subjectTitle = ''

 class Videos extends React.Component {
     constructor(props){
         super(props)
     }

    render() {
        const {router} = this.props
        return (<Template>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">INT491</a></BreadcrumbItem>
            </Breadcrumb>
            <h2>INT 491 Cloudnative development</h2>
            <Cardlist subjectId={router.query.subject_id}/>
        </Template>)
    }
}

export default withRouter(Videos)