import { createAction } from "redux-actions";

export const GET_GISTS = "GET_GISTS";
export const getGists = createAction(GET_GISTS);

export const GET_GISTS_SUCCESS = `${GET_GISTS}_SUCCESS`;
export const getGistsSuccess = createAction(GET_GISTS_SUCCESS);

export const GET_GISTS_FAIL = `${GET_GISTS}_FAIL`;
export const getGistsFail = createAction(GET_GISTS_FAIL);
