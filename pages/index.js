import React from 'react'
import NavBar from '../components/navbar'
import Template from '../layout/template';
import Router from 'next/router'
import Spiner from '../components/loadingcomponent'

export default class Index extends React.Component{
    componentDidMount(){
        Router.push('/login')
    }
    render() {
        return(<Template>
            <Spiner />
        </Template>)
    }
}