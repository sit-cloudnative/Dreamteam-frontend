import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const SubjectCard = (props) => {
  return (
    <div>
      <Card style={{marginBottom:'11px'}}>  
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>ACHARA TRAN-U-RAIKUL</CardSubtitle>
          <CardText>28 NOVEMBER 2018</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SubjectCard;

