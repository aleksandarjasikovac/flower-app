import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../store/reducers/userReducer";
import { RootState } from "../store/store";

function UserModal() {
  const userLogin = useSelector<RootState, UserState>((state) => state.user);
  const { userAuth } = userLogin;

  const token = userAuth ? userAuth.data.auth_token : null;

  const apiUrl = "https://flowrspot-api.herokuapp.com/api";
  const authAxios = axios.create({
    baseURL: apiUrl,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const response = authAxios.get("/v1/users/me").then(() => {
      //console.log(response);
    });
  });
  return (
    <div>
      <div>1</div>
    </div>
  );
}

export default UserModal;
