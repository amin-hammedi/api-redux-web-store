import { combineReducers } from "redux";
import { GET_ITEMS, SET_FILTER } from "./actionType";

const init = {
  items: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
};
const filterReducer = (state = init.filter, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};
export default combineReducers({
  filter: filterReducer,
});
