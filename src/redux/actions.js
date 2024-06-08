import axios from "axios";
import { GET_ITEMS } from "./actionType";

export const handleGetItems = () => async (dispatch) => {
  try {
    const res = await axios.get("https://api.api-ninjas.com/v1/exercises", {
      headers: {
        "X-Api-Key": "gGEMDdPNGBh65gr4RhtUkg==SZmmHTbVk60C3OE1",
      },
    });

    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    alert("get error");
  }
};
