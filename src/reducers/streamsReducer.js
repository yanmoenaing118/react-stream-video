import _ from "lodash";
import * as actionTypes from "./../actions/actionTypes";

const streamsReducer = (stream = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STREAMS:
      return { ...stream, ..._.mapKeys(action.payload, "id") };
    case actionTypes.FETCH_STREAM:
      return { ...stream, [action.payload.id]: action.payload };
    case actionTypes.CREATE_STREAM:
      return { ...stream, [action.payload.id]: action.payload };
    case actionTypes.EDIT_STREAM:
      return { ...stream, [action.payload.id]: action.payload };
    case actionTypes.DELETE_STREAM:
      return _.omit({ ...stream }, action.payload);
    default:
      return stream;
  }
};

export default streamsReducer;
