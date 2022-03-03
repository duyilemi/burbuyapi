import { publicRequest } from "../axiosMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
} from "./userRedux";
import { logOutClear } from "../redux/cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutUser());
  dispatch(logOutClear());
};
