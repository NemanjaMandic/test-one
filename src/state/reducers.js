import { combineReducers } from "redux";
import gists from "./gists/reducer";

const rootReducer = combineReducers({
  gists,
});

export default rootReducer;
