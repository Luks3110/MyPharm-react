import {
    all,
    take,
    put,
    call,
    race,
    delay,
    fork,
    spawn,
    cancel,
  } from 'redux-saga/effects';
  import {
    AUTH_START,
    authSuccess,
    authFail,
    LOGOUT_START,
    logoutSuccess,
    logoutFail,
  } from '../actions/Auth.actions';
  import { registerUser, loginUser, logoutUser } from '../../utils/api';
  
  function* authenticate({ name, email, password, confirmPassword, isRegister }) {
    try {
      let data;
      if (isRegister) {
        data = yield call(registerUser, { name, email, password, confirmPassword });
      } else {
        data = yield call(loginUser, { email, password });  
      }
      console.log(data)
      yield put(authSuccess(data));
      return data
    } catch (error) {
      yield put(authFail(error.message));
    }
  }
  
  function* logout() {
    try {
      yield call(logoutUser);
      yield put(logoutSuccess());
    } catch (error) {
      yield put(logoutFail());
    }
  }
  
  function* authFlow() {
    while (true) {
      const { payload } = yield take(AUTH_START);
      console.log(payload)
      const uid = yield call(authenticate, payload);
      console.log(uid)
      if (uid) {
        yield take(LOGOUT_START);
        yield call(logout);
      }
    }
  }
  
  export default function* () {
    yield all([authFlow()]);
  }