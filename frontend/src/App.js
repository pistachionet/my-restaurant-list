import { useReducer } from "react";
import "./App.css";
import Restaurants from "./components/restaurants";
import StarredRestaurants from "./components/starredRestaurants";
import RestaurantsContext, {
  RestaurantsInitialState,
  RestaurantsReducer,
} from "./provider/restaurants";

function App() {
  const [state, dispatch] = useReducer(
    RestaurantsReducer,
    RestaurantsInitialState
  );

  return (
    <div className="App">
      <h1 >Navid's Restaurant List</h1>
      <h3>Add resturants and what to order and i'll go check them out :) </h3>
      <RestaurantsContext.Provider value={{ state, dispatch }}>
        <Restaurants />
        <StarredRestaurants />
      </RestaurantsContext.Provider>
    </div>
  );
}

export default App;
