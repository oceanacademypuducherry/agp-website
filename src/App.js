import "./App.css";
import firebase from "./firebase";

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
      <h1>test</h1>
    </div>
  );
}

export default App;
