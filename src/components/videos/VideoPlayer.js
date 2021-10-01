import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./videoplayer.css";
import firebase from "../../firebase";
import RecomendedVideo from "./RecomendedVideo";

export default function VideoPlayer() {
  let { id } = useParams();
  // const allVideos = useSelector((state) => state.allVideos);
  const [selectedVideo, setSelectedVideo] = useState({
    title: "videoTitle",
    videoLink: "link",
    description: "description",
    videoImage: "imageLink",
  });
  const [videos, setVideos] = useState([]);

  const firestore = firebase.firestore();
  function getVideoData() {
    firestore
      .collection("youtubeVedios")
      .doc(id)
      .get()
      .then((video) => {
        setSelectedVideo({
          ...selectedVideo,
          title: video.data().title,
          description: video.data().description,
          videoLink: video.data().videoUrl,
          videoImage: video.data().videoImage,
        });
      });

    let vd = [];
    firestore
      .collection("youtubeVedios")
      .get()
      .then((videoData) => {
        videoData.docs.forEach((video) => {
          let dbField = video.data();
          dbField["docId"] = video.id;
          vd.push(dbField);
        });
        setVideos(vd);
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    getVideoData();
    // dispatch(videoDataRequest());
  }, [id]);

  return (
    <div className="video-player">
      <div className="video-content">
        <div className="vp-video-div">
          <div className="vp-video">
            <ReactPlayer
              className="react-player"
              url={selectedVideo.videoLink}
              controls={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="vp-video-title">{selectedVideo.title}</div>
          <div className="vp-video-description">
            {selectedVideo.description}
          </div>
        </div>
      </div>

      <div className="rc-video">
        {videos.map((video, key) => (
          <RecomendedVideo
            key={key}
            title={video.title}
            imageLink={video.videoImage}
            id={video.docId}
          />
        ))}
      </div>
    </div>
  );
}
