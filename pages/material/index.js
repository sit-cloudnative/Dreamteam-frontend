import React from 'react'
import AdminTable from '../../components/admintable'
import Table from '../../components/table'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Template from '../../layout/template'
import UploadModal from '../../components/uploadmodal'
import Router, { withRouter } from 'next/router'
import { subjectService } from '../../util/axios'

class Index extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            courseName: ''
        }
        this.axios = {}

        this.onBackToSubject = this.onBackToSubject.bind(this)
    }
    async componentDidMount() {
        const { router } = this.props
        const courseName = router.query.subject_code
        await this.setState({
            courseName
        })
    }
    async onBackToSubject() {
        const token = localStorage.getItem('token') || ''
        this.axios = subjectService(token)
        const { data } = await this.axios.get('/subjects',{
            params: {
                keyword: this.state.courseName
            }
        })
        const subject = data[0]
        Router.push({
            pathname: '/videos',
            query: {
                subject_id: subject.subjectId
            }
        })
    }
    hasStorage() {
        try {
            localStorage.getItem('token')
            return true
        } catch (exception) {
            return false
        }
    }
    render() {
        return(
        <Template>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem active><a onClick={this.onBackToSubject} style={{cursor: 'pointer'}}>{this.state.courseName}</a></BreadcrumbItem>
                <BreadcrumbItem>Material</BreadcrumbItem>
            </Breadcrumb>
            <center><h2>Material</h2></center>
            <div className='row' style={{paddingBottom:'22px'}}>
                <div className='col-2 offset-10'>
                    {
                        (this.hasStorage())?
                            (localStorage.getItem("role") && localStorage.getItem('role') == 'admin')?
                                <UploadModal courseName={this.state.courseName}/>:
                                '':
                            ''
                    }
                    
                </div>
            </div>
            <div className="container" style={{paddingBottom: '300px'}}>
                {
                    (this.hasStorage())?
                        (localStorage.getItem("role") && localStorage.getItem("role") == 'admin')?
                            <AdminTable courseName={this.state.courseName}/>:
                            <Table courseName={this.state.courseName}/>:
                        ''
                }
                
            </div>
        </Template>)
    }
}
export default withRouter(Index)