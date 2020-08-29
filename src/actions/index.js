import * as actionTypes from "./actionTypes";
import stream from "./../api/stream";
import history from "./../components/history";
export const signIn = (userId, name) => {
  return {
    type: actionTypes.SIGN_IN,
    payload: { userId, name },
  };
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};

export const fetchStreams = () => {
  return async (dispatch) => {
    const res = await stream.get("/streams");

    dispatch({ type: actionTypes.FETCH_STREAMS, payload: res.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const res = await stream.get(`/streams/${id}`);

    dispatch({ type: actionTypes.FETCH_STREAM, payload: res.data });
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const res = await stream.post("/streams", { ...formValues, userId });

  dispatch({ type: actionTypes.CREATE_STREAM, payload: res.data });
  history.push("/");
};

export const editStream = (formValues, id) => async (dispatch) => {
  const res = await stream.patch(`/streams/${id}`, { ...formValues });

  dispatch({ type: actionTypes.EDIT_STREAM, payload: res.data });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`/streams/${id}`);

  dispatch({ type: actionTypes.DELETE_STREAM, payload: id });

  history.push("/");
};
