import Meta from './meta'
import Footer from './footer'
import Navbar from '../components/navbar'
import React from 'react'
import Router from 'next/router'
// import ErrorPage from '../pages/_error'
import ErrorPage from '../components/error'
export default class Template extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token == null ){
      Router.push('/login')
    }else if(this.props.statusCode == 404){
      return <ErrorPage statusCode={this.props.statusCode} message="error!" />
    }
  }

  render() {
    return(
      <div>
        <Meta />
        <Navbar/>
        <div style={{backgroundColor:'#f7f9fb'}}>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}