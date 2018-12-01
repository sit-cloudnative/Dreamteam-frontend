import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Router from 'next/router'
/**
 * 
 * @param {*} props 
 * lecturer: "Siam Yamsaengsung"
videoId: 8282
videoName: "INT 101 INFORMATION TECHNOLOGY FUNDAMENTAL G.2"
videoThumbnail: "https://ngelearning.sit.kmutt.ac.th/api/video_image?id=8282"
 */

const SubjectCard = ({ video }) => {

  const redirectToVideo = (targetVideo) => {
    Router.push({
      pathname: '/video',
      query: { video_id: targetVideo }
    })
  }

  return (
    <div>
      <a onClick={() => redirectToVideo(video.videoId)}>
        <Card className="videoCard" style={{ marginBottom: '24px', borderRadius: '10px 10px 10px 10px', borderColor: '#f7f7f7' }}>
          <CardImg top width="100%" src={video.videoThumbnail} alt="Card image cap" style={{ borderRadius: '10px 10px 0% 0%' }} />
          <CardBody>
            <CardSubtitle>{video.lecturer}</CardSubtitle>
            <CardText>28 November 2018</CardText>
          </CardBody>
        </Card>
      </a>
    </div>
  );
};

export default SubjectCard;

