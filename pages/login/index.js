import React from 'react'
import Login from '../../components/login'
import NavBar from '../../components/navbar'


export default class index extends React.Component {
    render() {
        return (<div>
            <NavBar></NavBar>
            <Login></Login>
        </div>)
    }
}