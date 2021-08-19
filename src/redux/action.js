import {
  GET_BOOK_DATA_REQUEST,
  GET_BOOK_DATA_SUCCESS,
  GET_BOOK_DATA_FAILURE,
  GET_VIDEO_DATA_REQUEST,
  GET_VIDEO_DATA_SUCCESS,
  GET_VIDEO_DATA_FAILURE,
  GET_ARTICLE_DATA_REQUEST,
  GET_ARTICLE_DATA_SUCCESS,
  GET_ARTICLE_DATA_FAILURE,
  GET_ARTICLE_ID,
} from "./actionType";
import firebase from "../firebase";
const firestore = firebase.firestore();
export const bookDataRequest = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOK_DATA_REQUEST });

    let bookItem = [];
    firestore
      .collection("books")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          bookItem.push(doc.data());
        });

        dispatch({
          type: GET_BOOK_DATA_SUCCESS,
          payload: bookItem,
        });
      });
  } catch (error) {
    dispatch({
      type: GET_BOOK_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const videoDataRequest = () => async (dispatch) => {
  try {
    dispatch({ type: GET_VIDEO_DATA_REQUEST });
    let videoItem = [];
    firestore
      .collection("youtubeVedios")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          videoItem.push(doc.data());
        });
        console.log(videoItem);
        dispatch({ type: GET_VIDEO_DATA_SUCCESS, payload: videoItem });
      });
  } catch (error) {
    dispatch({ type: GET_VIDEO_DATA_FAILURE, payload: error.message });
    console.log(error.message);
  }
};

//article action

export const articleDataRequest = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ARTICLE_DATA_REQUEST });

    let articleItem = [];
    let articleId = [];
    firestore
      .collection("articles")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          articleItem.push(doc.data());
          articleId.push(doc.id);
        });
        console.log(articleItem);
        console.log(articleId);
        dispatch({ type: GET_ARTICLE_ID, payload: articleId });
        dispatch({ type: GET_ARTICLE_DATA_SUCCESS, payload: articleItem });
      });
  } catch (error) {
    dispatch({ type: GET_ARTICLE_DATA_FAILURE, payload: error.message });
  }
};
