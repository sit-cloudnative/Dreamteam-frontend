import React from 'react'
import Curriculum from '../../components/curriculum'
import NavBar from '../../components/navbar'

export default class video extends React.Component {
    render() {
        return (<div>
            <NavBar></NavBar>            
            <Curriculum></Curriculum>
        </div>)
    }
}