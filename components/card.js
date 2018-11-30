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
      <a onClick={() => redirectToVideo(video.videoId)}>
        <Card style={{marginBottom:'11px'}}>  
          <CardImg top width="100%" src={video.videoThumbnail} alt="Card image cap" />
          <CardBody>
            <CardSubtitle>{video.lecturer}</CardSubtitle>
            <CardText>28 NOVEMBER 2018</CardText>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default SubjectCard;

