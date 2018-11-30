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
        const {router} = this.props
        const videoId = router.query.video_id
        this.setState({
            test:'test2'
        })
        console.log('state')
        console.log(this.state.test)
        console.log(this.state.targetVideo)
    }

    render() {
        return (
        <Template>
            <VideoDetail videoId={this.state.targetVideo}/>
        </Template>)
    }
}
export default withRouter(Video)