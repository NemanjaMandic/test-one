import { all } from "redux-saga/effects";
import gistSaga from "./gists/sagas";

export default function* () {
  yield all([gistSaga()]);
}
