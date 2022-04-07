import Post from "../../models/postModel";
import User from "../../models/userLogin";
import ActionType from "./actionTypes";

interface GetPostRequestAction {
  type: ActionType.GET_POST_REQUEST;
}

interface GetPostSuccessAction {
  type: ActionType.GET_POST_SUCCESS;
  payload: { flowers: Post[]; meta: any };
}

interface GetPostFailAction {
  type: ActionType.GET_POST_FAIL;
  payload: string;
}

interface GetUserRequestAction {
  type: ActionType.USER_LOGIN_REQUEST;
}

interface GetUserSuccessAction {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: { data: { auth_token: string }; headers: any };
}

interface GetUserFailAction {
  type: ActionType.USER_LOGIN_FAIL;
  payload: string;
}
export type Action =
  | GetPostRequestAction
  | GetPostSuccessAction
  | GetPostFailAction
  | GetUserSuccessAction
  | GetUserRequestAction
  | GetUserFailAction;
