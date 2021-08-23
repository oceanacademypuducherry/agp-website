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
import Doc from "./components/common/Doc";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
          <Route
            path={"/agp-website/book-preview/:id"}
            component={BookPreview}
          />
          <Route
            exact
            path={"/agp-website/video-player/:id"}
            component={VideoPlayer}
          />
          <Route
            exact
            path={"/agp-website/doc/:collection/:id/:fieldName"}
            component={Doc}
          />
          <Route
            exact
            path={"/agp-website/article-view/:id"}
            component={ArticleView}
          />
          <Route
            exact
            path={"/agp-website/article/seeAll"}
            component={SeeAllArticle}
          />
          <Route
            exact
            path={"/agp-website/books/seeAll"}
            component={SeeAllBooks}
          />
          <Route
            exact
            path={"/agp-website/videos/seeAll"}
            component={SeeAllVideo}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
