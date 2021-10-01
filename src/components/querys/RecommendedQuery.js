import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import QueryList from "./QueryList";

export default function RecommendedQuery() {
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
    <div className="recomended-query">
      <div className="rq-query-list">
        {querysData.map((doc) => (
          <QueryList
            queryId={doc.docId}
            title={doc.question}
            image={doc.queryImage}
            postId={doc.postId}
          />
        ))}
      </div>
    </div>
  );
}
