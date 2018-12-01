import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
export default class Oops extends React.Component {
    render() {
        const cardStyle = {
            marginTop: '300px',
            textAlign: 'center'
        };
        const buttonStyle = {
            textAlign: 'center',
            width: '130px',
            marginLeft: '670px'


        };
        return (
            <div>
                <Card body inverse color="danger" style={cardStyle}>
                    <CardTitle>Oops ! Something went wrong please try again later</CardTitle>
                    <Button style={buttonStyle} className="backToHome" block>Back to home</Button>

                </Card>
            </div>
        )
    }
}