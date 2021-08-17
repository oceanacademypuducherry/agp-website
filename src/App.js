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

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <TopNavbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/book-preview/:id" component={BookPreview} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
