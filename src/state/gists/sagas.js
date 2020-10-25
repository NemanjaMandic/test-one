import { all, takeLatest, put } from "redux-saga/effects";

import { getGistsAPI } from "../../services/api";
import * as actions from "./actions";

export function* getGists$({ payload }) {
  try {
    const { data } = yield getGistsAPI(payload);
    yield put(actions.getGistsSuccess(data));
  } catch (error) {
    yield put(actions.getGistsFail(error));
  }
}

export default function* gistSaga() {
  yield all([takeLatest(actions.getGists, getGists$)]);
}
