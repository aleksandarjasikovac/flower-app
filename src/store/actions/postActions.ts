import axios from "axios";
import { Dispatch } from "redux";
import { Action } from ".";

import ActionType from "./actionTypes";



export const getPosts = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.GET_POST_REQUEST,
    });
    const { data } = await axios.get<any>(
      "https://flowrspot-api.herokuapp.com/api/v1/flowers"
    );
    dispatch({
      type: ActionType.GET_POST_SUCCESS,
      payload: data,
    });

  } catch (error: any) {
    dispatch({
      type: ActionType.GET_POST_FAIL,
      payload: error.message,
    });
  }
};
