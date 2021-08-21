import React, { useEffect, useState } from "react";
import Video from "./Video";
import firebase from "../../firebase";

export default function SeeAllVideo() {
  const [videos, setVideos] = useState([]);
  const firestore = firebase.firestore();
  function getVideoData() {
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
  }, []);
  return (
    <div className="see-all-video">
      <div className="sav-wrap">
        {videos.map((video, key) => (
          <Video
            key={key}
            videoThumbnail={video.imageLink}
            title={video.title}
            id={video.docId}
          />
        ))}
      </div>
    </div>
  );
}
