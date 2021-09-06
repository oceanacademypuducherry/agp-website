import React, { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Query from "./Query";
import "./querys.css";
import { author } from "../images/allImages";
import Carousel from "react-elastic-carousel";
import firebase from "../../firebase";

export default function Querys() {
  const breakPoints = [
    { width: 1050, itemsToShow: 1 },
    { width: 1050, itemsToShow: 2 },
    { width: 1550, itemsToShow: 3 },
    // { width: 1500, itemsToShow: 5 },
    // { width: 1800, itemsToShow: 6 },
  ];
  const firestore = firebase.firestore();
  let fireData = firestore.collection("queries");
  const [isHaveData, setIsHaveData] = useState(null);
  const [querysData, setQuerysData] = useState([]);
  useEffect(() => {
    fireData.onSnapshot((querySnapshot) => {
      let queryResponse = [];
      querySnapshot.docs.map((doc) => {
        let dbField = doc.data();
        dbField["docId"] = doc.id;
        queryResponse.push(dbField);
      });
      setQuerysData(queryResponse);
      if (queryResponse.length === 0) {
        setIsHaveData(false);
      } else {
        setIsHaveData(true);
      }
    });
  }, [isHaveData]);
  return (
    <div id="query" className="querys-div">
      <SectionTitle title="Querys" />

      <div className="see-all">
        <div className="see-all-text ">See All</div>
      </div>
      {/* <div className="all-querys"> */}
      <Carousel
        breakPoints={breakPoints}
        enableSwipe="true"
        // enableAutoPlay="true"
        showArrows={false}
      >
        {isHaveData === null ? (
          <h1>Loading...</h1>
        ) : isHaveData ? (
          querysData.map((item, index) => (
            <Query
              authorImg={author}
              question={item.question}
              image={item.queryImage}
              answer={item.answer}
              queryId={item.docId}
              postId={item.postId}
            />
          ))
        ) : (
          <h1>No data</h1>
        )}

        {/* <Query authorImg={item.queryImage} /> */}
        {/* <Query authorImg={author} /> */}
        {/* <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} />
        <Query authorImg={author} /> */}
      </Carousel>
      {/* </div> */}
    </div>
  );
}
