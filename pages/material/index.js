import React from 'react'
import AdminTable from '../../components/admintable'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Template from '../../layout/template'
import UploadModal from '../../components/uploadmodal'


export default class Index extends React.Component{
    render() {
        return(
        <Template>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem active><a href="">INT102</a></BreadcrumbItem>
                <BreadcrumbItem>Material</BreadcrumbItem>
            </Breadcrumb>
            <h2>Material</h2>
            <div className='row' style={{paddingBottom:'22px'}}>
                <div className='col-2 offset-10'>
                    <UploadModal />
                </div>
            </div>
            <div className="container">
                <AdminTable />
            </div>
        </Template>)
    }
}