import React from 'react'
import Template from '../../layout/template'
import Cardlist from '../../components/cardlist'
import { Breadcrumb, BreadcrumbItem,Button,Row,Col } from 'reactstrap';
import { withRouter } from 'next/router'
import Router from 'next/router'
import {videoService , subjectService, errorChecker} from '../../util/axios'
import Spiner from '../../components/loadingcomponent'
import Notfound from '../../components/notfound'

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
        let keyword = router.query.keyword
        let token = localStorage.getItem('token')
        await this.setState({
            token
        })
        this.getSubjectById(subjectId)
        await this.getSubjectDetail()
    }

    async getSubjectById(subjectId){
        let response = {}
        this.axios = videoService(this.state.token)
        try{
            response = await this.axios.get(`/subject/${subjectId}/videos`)
        }catch(err){}
            if(errorChecker(response)){
            await this.setState({videoList:response.data})
        }
        console.log(response)
    }

    async getSubjectDetail() {
        const {router} = this.props
        let subjectId = router.query.subject_id
        this.axios = subjectService(this.state.token)
        let response = {}
        try{
            response = await this.axios.get(`/subject/${subjectId}`)
        }catch(err){
            console.log("ERRORRORORO")
            if(err == 'Error: Request failed with status code 404'){
                this.setState({videoList:'notfound',isLoading:false})
            }
        }
        if(errorChecker(response)){
            this.setState({
                subject:response.data,
                isLoading:false
            })
        }
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
                <BreadcrumbItem active><a onClick={() => Router.push('/subject')}>Curriculumn</a></BreadcrumbItem>
                <BreadcrumbItem>{this.state.subject.subjectCode}</BreadcrumbItem>
            </Breadcrumb>
            <Row style={{textAlign:'center',paddingLeft:'230px'}}>
                <Col xs={10} style={{fontSize:'33px'}}>{this.state.subject.subjectName}</Col>
                <Col xs={2}>
                    <Button  onClick={this.goToMaterial}>Material</Button>
                </Col>
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