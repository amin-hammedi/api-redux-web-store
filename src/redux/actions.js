import axios from "axios";
import { ADD, DELETE, GET_ITEMS } from "./actionType";
import { type } from "@testing-library/user-event/dist/type";

export const handleGetItems = () => async (dispatch) => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    alert("get error");
  }
};
export const handledelete = (ID) => {
  return {
    type: DELETE,
    payload: ID,
  };
};
export const handleADD = (newItem) => {
  return {
    type: ADD,
    payload: newItem,
  };
};
