import Meta from './meta'
import Footer from './footer'
import Navbar from '../components/navbar'
import React from 'react'
import Router from 'next/router'
export default class Template extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    console.log('token')
    console.log(token)
    if(token == null ){
      Router.push('/login')
    }
  }

  render() {
    return(
      <div>
        <Meta />
        <Navbar/>
        <div style={{padding:'8px',marginTop:'55px',backgroundColor:'#f7f7f7'}}>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}