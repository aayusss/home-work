import * as types from './ActionType';
import { auth } from '../firebase/firebase';

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
const LoginStart = () => ({
  type: types.LOGIN_START,
});

const LoginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const LoginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
const LogoutStart = () => ({
  type: types.LOGOUT_START,
});

const LogoutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
  payload: user,
});

const LogoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});
export const setUser=(user)=>({
    type:types.SET_USER,
    payload:user,
})

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};
export const LoginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(LoginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(LoginSuccess(user));
      })
      .catch((error) => dispatch(LoginFail(error.message)));
  };
};
export const LogoutInitiate = () => {
  return function (dispatch) {
    dispatch(LogoutStart());
    auth
      .signOut()
      .then(() => dispatch(LogoutSuccess()))
      .catch((error) => dispatch(LogoutFail(error.message)));
  };
};
