import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookReducer, videoReducer, articleReducer } from "./reducer";

const reducer = combineReducers({
  allBooks: bookReducer,
  allVideos: videoReducer,
  allArticles: articleReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
