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
} from "./actionType";

//image reducer
export const bookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case GET_BOOK_DATA_REQUEST:
      return { loading: true, books: [] };

    case GET_BOOK_DATA_SUCCESS:
      return {
        loading: false,
        books: action.payload,
      };

    case GET_BOOK_DATA_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//video reducer
export const videoReducer = (state = { videos: [] }, action) => {
  switch (action.type) {
    case GET_VIDEO_DATA_REQUEST:
      return { loading: true, videos: [] };
    case GET_VIDEO_DATA_SUCCESS:
      return { loading: false, videos: action.payload };
    case GET_VIDEO_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//article reducer
export const articleReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case GET_ARTICLE_DATA_REQUEST:
      return { loading: true, articles: [] };
    case GET_ARTICLE_DATA_SUCCESS:
      return { loading: false, articles: action.payload };
    case GET_ARTICLE_DATA_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
