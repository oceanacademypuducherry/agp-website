import React, { useEffect, useState } from "react";
import GoogleDocsViewer from "react-google-docs-viewer";
import { Link, useParams } from "react-router-dom";
import firebase from "../../firebase";

export default function Doc() {
  let { fieldName, collection, id } = useParams();
  const [bookURL, setBookURL] = useState("");
  const firestore = firebase.firestore();
  const bookFromDb = firestore.collection(collection).doc(id).get();
  function getBookData() {
    bookFromDb.then((response) => {
      console.log(response.data());
      setBookURL(response.data()[fieldName]);
    });
  }

  useEffect(() => {
    getBookData();
  }, [id]);

  return (
    <div>
      {bookURL.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleDocsViewer
          width="100%"
          height="100vh"
          // fileUrl="http://www.africau.edu/images/default/sample.pdf"
          fileUrl={bookURL}
        />
      )}
    </div>
  );
}
