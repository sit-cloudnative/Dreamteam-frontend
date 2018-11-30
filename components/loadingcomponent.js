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
    alignContent:'center'
}

export default () => (
    <div style={loadingStyle}>
        <ReactLoading type={'spin'} color={'#0091ac'} />
     </div>
)