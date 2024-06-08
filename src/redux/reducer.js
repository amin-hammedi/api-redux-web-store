import { GET_ITEMS } from "./actionType";

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
