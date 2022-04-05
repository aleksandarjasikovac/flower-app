import Post from "../../models/postModel";
import { Action } from "../actions";
import ActionType from "../actions/actionTypes";

interface PostState {
  loading: boolean;
  error: string | null;
  data: { flowers: Post[]; meta: any } | null;
}

const initialState = { loading: false, error: null, data: null };

export const postReducer = (
  state: PostState = initialState,
  action: Action
): PostState => {
  switch (action.type) {
    case ActionType.GET_POST_REQUEST:
      return { loading: true, error: null, data: null };
    case ActionType.GET_POST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_POST_FAIL:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};
