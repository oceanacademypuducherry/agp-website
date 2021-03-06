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
import AdminPage from "./components/admin/admin";
import ReadQuery from "./components/querys/ReadQuery";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNavbar />
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route
            path={"/agp-website/book-preview/:id"}
            component={BookPreview}
          />
          <Route
            path={"/agp-website/video-player/:id"}
            component={VideoPlayer}
          />
          <Route
            path={"/agp-website/doc/:collection/:id/:fieldName"}
            component={Doc}
          />
          <Route
            path={"/agp-website/article-view/:id/:postId"}
            component={ArticleView}
          />
          <Route
            path={"/agp-website/article/seeAll"}
            component={SeeAllArticle}
          />
          <Route
            path={"/agp-website/query/read-query/:queryId/:postId"}
            component={ReadQuery}
          />
          <Route path={"/agp-website/books/seeAll"} component={SeeAllBooks} />
          <Route path={"/agp-website/videos/seeAll"} component={SeeAllVideo} />
          <Route exact path={"/admin-page"} component={AdminPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
