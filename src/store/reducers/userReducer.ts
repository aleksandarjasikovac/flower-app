import { Action } from "../actions";
import ActionType from "../actions/actionTypes";

export interface UserState {
  isLoggedIn: boolean;
  loading?: boolean;
  error?: string | null;
  userAuth: { data: { auth_token: string }; headers: any } | null;
}

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  userAuth: null,
};

export const userLoginReducer = (
  state: UserState = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return { isLoggedIn: false, loading: true, error: null, userAuth: null };
    case ActionType.USER_LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        loading: false,
        error: null,
        userAuth: action.payload,
      };
    case ActionType.USER_LOGIN_FAIL:
      return {
        isLoggedIn: false,
        loading: false,
        error: action.payload,
        userAuth: null,
      };
    default:
      return state;
  }
};
