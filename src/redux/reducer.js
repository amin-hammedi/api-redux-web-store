import { ADD, DELETE, GET_ITEMS } from "./actionType";

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
    case DELETE:
      return {
        ...state,
        items: state.items.filter((el) => el.id !== payload),
      };
    case ADD:
      return {
        ...state,
        items: [...state.items, payload],
      };
    default:
      return state;
  }
};
