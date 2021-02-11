import { combineReducers } from "redux";

import data from "./data";
import login from "./login";

const reducer = combineReducers({
  data,
  login,
});

export default reducer;
