import React from 'react'
import Template from '../../layout/template'
import Cardlist from '../../components/cardlist'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { withRouter } from 'next/router'
import {videoService} from '../../util/axios'
import Spiner from '../../components/loadingcomponent'

let subjectTitle = ''

 class Videos extends React.Component {
     constructor(props){
         super(props)
         this.state = {
            targetSubject:'',
            videoList: [],
            subjectName: '',
            videoTitle:'',
             isLoading:true
        }
     }

     async componentDidMount () {
        const {router} = this.props
        let subjectId = router.query.subject_id
        let token = localStorage.getItem('token')
        this.axios  = videoService(token)
        let {data} = await this.axios.get(`/subject/${subjectId}/videos`)
        await this.setState({videoList:data})
        let subjectTitle = await data[0].videoName
        await this.setState({videoTitle:subjectTitle,isLoading:false})
        console.log(videoList)
    }
    render() {
        const {router} = this.props
        return (<Template>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">B.SC.IT</a></BreadcrumbItem>
                <BreadcrumbItem><a href="#">INT491</a></BreadcrumbItem>
            </Breadcrumb>
            <h2>{this.state.videoTitle}</h2>
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