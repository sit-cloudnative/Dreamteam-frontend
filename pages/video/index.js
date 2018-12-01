import React from 'react'
import VideoDetail from '../../components/videodetail'
import Template from '../../layout/template'
import { withRouter } from 'next/router'

class Video extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            targetVideo: '',
            test: 'test'
        }
    }

    componentDidMount(){
    }

    render() {
        return (
        <Template>
            <VideoDetail videoId={this.props.router.query.video_id}/>
        </Template>)
    }
}
export default withRouter(Video)