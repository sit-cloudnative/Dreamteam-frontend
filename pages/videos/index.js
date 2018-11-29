import React from 'react'
import Card from '../../components/card'
import Template from '../../layout/template'
import Cardlist from '../../components/cardlist'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default class Videos extends React.Component {
    render() {
        return (<Template>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">INT491</a></BreadcrumbItem>
            </Breadcrumb>
            <h2>INT 491 Cloudnative development</h2>
            <Cardlist/>
        </Template>)
    }
}