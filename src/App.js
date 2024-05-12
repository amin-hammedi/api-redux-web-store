import "./App.css";
import { AddItem } from "./Components/AddItem";
import ItemList from "./Components/ItemList";

function App() {
  return (
    <div className="App">
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;
