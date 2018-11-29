import React from 'react'
import VideoDetail from '../../components/videodetail'
import NavBar from '../../components/navbar'

export default class video extends React.Component {
    render() {
        return (<div>
            <NavBar></NavBar>
            <VideoDetail></VideoDetail>
        </div>)
    }
}