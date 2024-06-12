import axios from "axios";
import { GET_ITEMS, SET_FILTER } from "./actionType";

export const handleGetItems = () => async (dispatch) => {
  try {
    const apiKey = "gGEMDdPNGBh65gr4RhtUkg==SZmmHTbVk60C3OE1";
    const headers = {
      "X-Api-Key": apiKey,
    };

    let url1 = "https://api.api-ninjas.com/v1/exercises?difficulty=beginner";
    let url2 =
      "https://api.api-ninjas.com/v1/exercises?difficulty=intermediate";
    let url3 = "https://api.api-ninjas.com/v1/exercises?difficulty=expert";

    let promise1 = axios.get(url1, { headers: headers });
    let promise2 = axios.get(url2, { headers: headers });
    let promise3 = axios.get(url3, { headers: headers });

    Promise.all([promise1, promise2, promise3]).then(
      (responses) => {
        const data = responses.map((response) => response.data);
        const datas = data.flat();
        dispatch({
          type: GET_ITEMS,
          payload: datas,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  } catch (error) {
    console.log(error);
    alert("get error");
  }
};
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter },
});
