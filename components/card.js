import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Router from 'next/router'
/**
 * 
 * @param {*} props 
 * lecturer: "Siam Yamsaengsung"
videoId: 8282
videoName: "INT 101 INFORMATION TECHNOLOGY FUNDAMENTAL G.2"
videoThumbnail: "https://ngelearning.sit.kmutt.ac.th/api/video_image?id=8282"
 */

const SubjectCard = ({video}) => {
 const  redirectToVideo = (TargetVideo) => {
   console.log(TargetVideo)
  //   Router.push({
  //     pathname: '/videos',
  //     query: { subject_id: targetSubjectId }
  // })
  }

  return (
    <div>
      <Card style={{marginBottom:'11px'}}>  
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardSubtitle>{video.lecturer}</CardSubtitle>
          <CardText>28 NOVEMBER 2018</CardText>
          <Button onClick={() => redirectToVideo(video.videoId)}>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SubjectCard;

