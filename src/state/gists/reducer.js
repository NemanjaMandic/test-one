import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_GISTS:
      return {
        ...state,
        gists: {
          ...state.gists,
          inProgress: true,
        },
      };
    case actions.GET_GISTS_SUCCESS:
      return {
        ...state,
        gists: {
          inProgress: false,
          data: payload,
        },
      };
    case actions.GET_GISTS_FAIL:
      return {
        ...state,
        inProgress: false,
        error: payload,
      };
    default:
      return state;
  }
};
