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
         this.state = {
             videoTitle:''
         }
         this.changeVideoTitle = this.changeVideoTitle.bind(this)
     }

     changeVideoTitle(title) {
        this.setState({videoTitle:title})
     }

    render() {
        const {router} = this.props
        return (<Template>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">INT491</a></BreadcrumbItem>
            </Breadcrumb>
            <h2>{this.state.videoTitle}</h2>
            <Cardlist changeVideoTitle={this.changeVideoTitle} subjectId={router.query.subject_id}/>
        </Template>)
    }
}

export default withRouter(Videos)