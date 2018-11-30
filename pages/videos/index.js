import React from 'react'
import Template from '../../layout/template'
import Cardlist from '../../components/cardlist'
import { Breadcrumb, BreadcrumbItem,Button,Row,Col } from 'reactstrap';
import { withRouter } from 'next/router'
import Router from 'next/router'
import {videoService , subjectService} from '../../util/axios'
import Spiner from '../../components/loadingcomponent'

let subjectTitle = ''

 class Videos extends React.Component {
     constructor(props){
         super(props)
         this.state = {
            targetSubject:'',
            videoList: [],
            subjectName: '',
            subject:{
                subjectCode:''
            },
            videoTitle:'',
            isLoading:true,
            token:''
        }
        this.goToMaterial = this.goToMaterial.bind(this)
     }

     async componentDidMount () {
        const {router} = this.props
        let subjectId = router.query.subject_id
        let token = localStorage.getItem('token')
        this.setState({
            token
        })
        this.axios  = videoService(token)
        let {data} = await this.axios.get(`/subject/${subjectId}/videos`)
        await this.setState({videoList:data})
        let subjectTitle = await data[0].videoName
        await this.setState({videoTitle:subjectTitle,isLoading:false})
        await this.getSubjectDetail()
        console.log('subtect')
        console.log(this.state)
    }

    async getSubjectDetail() {
        const {router} = this.props
        let subjectId = router.query.subject_id
        this.axios = subjectService(this.state.token)
        let {data} = await this.axios.get(`/subject/${subjectId}`)
        this.setState({
            subject:data
        })
        console.log('subject')
        console.log(data)

    }

    goToMaterial() {
        let subjectCode =  this.state.subject.subjectCode
        Router.push({
            pathname: '/material',
            query: { subject_code:`${subjectCode}` }
        })
    }

    render() {
        return (<Template>
            <Breadcrumb style={{backgroundColor:'#f7f7f7'}}>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem>{this.state.subject.subjectCode}</BreadcrumbItem>
            </Breadcrumb>
            <Row style={{textAlign:'center',paddingLeft:'230px'}}>
                <Col xs={10} style={{fontSize:'33px'}}>{this.state.subject.subjectName}</Col><Col xs={2}><Button  onClick={this.goToMaterial}>Material</Button></Col>
            </Row>
            {this.state.isLoading ? (
                <div style={{width:'100%',height:'100%'}}>
                    <Spiner/>
                </div>
            ):<Cardlist changeVideoTitle={this.changeVideoTitle} videoList={this.state.videoList} />            
            }
        </Template>)
    }
}

export default withRouter(Videos)