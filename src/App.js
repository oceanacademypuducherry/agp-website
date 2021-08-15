import "./App.css";
import TopNavbar from "./components/navbar/Navbar";
import firebase from "./firebase";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import Books from "./components/books/Books";
import Videos from "./components/videos/Videos";
import Articles from "./components/article/Articles";
import Querys from "./components/querys/Querys";

function App() {
  let firestore = firebase.firestore();
  let userData = firestore.collection("thamizhTest");
  function getData() {
    let items = [];
    userData.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data().test);
      });
    });
  }
  getData();
  return (
    <div className="App">
      <TopNavbar />
      <Home />
      <AboutUs />
      <Books />
      <Videos />
      <Articles />
      <Querys />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
