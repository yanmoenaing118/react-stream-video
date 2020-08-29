import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as actionTypes from "./../actions/actionTypes";
import streamsReducer from "./streamsReducer";

const initialState = {
  isAuth: null,
  userId: null,
  name: "",
};

const authReducer = (state = initialState, action) => {
  if (action.type === actionTypes.SIGN_IN) {
    return { ...state, isAuth: true, ...action.payload };
  }
  if (action.type === actionTypes.SIGN_OUT) {
    return { ...state, isAuth: false, userId: null, name: "" };
  }
  return { ...state };
};

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamsReducer,
});
