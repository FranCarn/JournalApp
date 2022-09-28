import {
  loginUser,
  logoutFirebase,
  registerUser,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkCredentials, logout, login } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUser = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUser({
      email,
      password,
      displayName,
    });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const { ok, uid, photoURL, errorMessage } = await loginUser({
      email,
      password,
    });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, email, photoURL }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
