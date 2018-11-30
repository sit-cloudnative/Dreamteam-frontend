import React from 'react'
import Table from '../../components/admintable'
import { Breadcrumb, BreadcrumbItem ,Button} from 'reactstrap';
import Template from '../../layout/template'


export default class Index extends React.Component{
    render() {
        return(
        <Template>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem active><a href="#">INT102</a></BreadcrumbItem>
                <BreadcrumbItem>Material</BreadcrumbItem>
            </Breadcrumb>
            <h2>Material</h2>
            <div className='row' style={{paddingBottom:'22px'}}>
                <div className='col-2 offset-10'>
                    <Button color="info"><i className="fas fa-file-upload"></i> upload</Button>
                </div>
            </div>
            <div className="container">
                <Table />
            </div>
        </Template>)
    }
}