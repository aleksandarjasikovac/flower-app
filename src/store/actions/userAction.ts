import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import ActionType from "./actionTypes";

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: ActionType.USER_LOGIN_REQUEST,
      });
      // interact with the backend
      const response = await axios.post(
        "https://flowrspot-api.herokuapp.com/api/v1/users/login",
        {
          email: email,
          password: password,
        }
      );
      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: response,
      });

      localStorage.setItem("userInfo", JSON.stringify(response));
    } catch (error) {}
  };
