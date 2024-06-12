import { useSelector } from "react-redux";
import "./App.css";
import ItemList from "./Components/ItemList";
import Navebar from "./Components/Navebar";

import { useCallback } from "react";

function App() {
  const filter = useSelector((state) => state.filter);

  const { items } = useSelector((state) => state);
  const filterTasks = useCallback((items, filter) => {
    switch (filter) {
      case "beginner":
        return items.filter((item) => item.difficulty === "beginner");
      case "intermediate":
        return items.filter((item) => item.difficulty === "intermediate");
      case "expert":
        return items.filter((item) => item.difficulty === "expert");
      default:
        return <div>suii</div>;
    }
  }, []);
  return (
    <div>
      <Navebar />

      <ItemList items={filterTasks(items, filter)} />
    </div>
  );
}

export default App;
