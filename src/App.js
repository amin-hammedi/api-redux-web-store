import axios from "axios";
import "./App.css";
import ItemList from "./Components/ItemList";

function App() {
  const apiKey = "gGEMDdPNGBh65gr4RhtUkg==SZmmHTbVk60C3OE1";
  const headers = {
    "X-Api-Key": apiKey,
  };

  let url1 = "https://api.api-ninjas.com/v1/exercises?difficulty=beginner";
  let url2 = "https://api.api-ninjas.com/v1/exercises?difficulty=intermediate";
  let url3 = "https://api.api-ninjas.com/v1/exercises?difficulty=expert";

  let promise1 = axios.get(url1, { headers: headers });
  let promise2 = axios.get(url2, { headers: headers });
  let promise3 = axios.get(url3, { headers: headers });

  Promise.all([promise1, promise2, promise3]).then(
    (response) => {
      console.log(response);
    },
    (err) => {
      console.log(err);
    }
  );

  return <ItemList></ItemList>;
}

export default App;
