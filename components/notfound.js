import React from 'react'
import ReactLoading from "react-loading";

const loadingStyle = {
    width:'100%',
    height:'100%',
    minHeight: '400px',
    display:'flex',
    display:'-webkit-flex',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    color: '#d9d9d9'
}

export default (props) => (
    <div style={loadingStyle}>
        <h2>{props.message}</h2>
     </div>
)