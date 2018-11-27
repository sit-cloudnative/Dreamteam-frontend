import React from 'react'
import Login from '../../components/login'
import AppBar from '../../components/appbar'
import SearchBar from 'material-ui-search-bar'


export default class index extends React.Component {
    render() {
        return (<div>
            <AppBar></AppBar>
            <Login></Login>

            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />
        </div>)
    }
}