import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./videoplayer.css";

export default function VideoPlayer() {
  const allVideos = useSelector((state) => state.allVideos);

  let { id } = useParams();
  console.log(allVideos.videos);

  return (
    <div className="video-player">
      <Container fluid>
        <Row lg={12}>
          <Col lg={8}>
            <div className="video-content">
              <div className="vp-video-div">
                <div className="vp-video">
                  <ReactPlayer
                    className="react-player"
                    url={allVideos.videos[id].vedioUrl}
                    controls={true}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div className="vp-video-title">
                  {allVideos.videos[id].title}
                </div>
                <div className="vp-video-description">
                  {allVideos.videos[id].description}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            {allVideos.videos.map((video, index) => (
              <div className="vp-video-list">
                <div className="vp-vl-video">
                  <img
                    src={video.imageLink}
                    alt="test"
                    className="vp-vl-video-img"
                  />
                </div>

                <div className="vp-vl-video-title">{video.title}</div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
