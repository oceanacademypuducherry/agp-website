import "./App.css";
import TopNavbar from "./components/navbar/Navbar";
import firebase from "./firebase";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/main/Main";
import BookPreview from "./components/books/BookPreview";
import VideoPlayer from "./components/videos/VideoPlayer";
import ArticleView from "./components/article/ArticleView";
import SeeAllArticle from "./components/article/SeeAllArticle";
import SeeAllBooks from "./components/books/SeeAllBooks";
import SeeAllVideo from "./components/videos/SeeAllVideo";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <div className="App">
          <TopNavbar />
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route exact path={"/book-preview/:id"} component={BookPreview} />
            <Route exact path="/video-player/:id" component={VideoPlayer} />
            <Route exact path="/article-view/:id" component={ArticleView} />
            <Route exact path="/article/seeAll" component={SeeAllArticle} />
            <Route exact path="/books/seeAll" component={SeeAllBooks} />
            <Route exact path="/videos/seeAll" component={SeeAllVideo} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
