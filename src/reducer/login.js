import * as actions from "../action/actionType";

const testData = require("../data/loginData.json");

export default function loginData(state = testData, action) {
  console.log(action);
  switch (action.type) {
    case actions.LOGIN_DATA:
      return action.data;
    default:
      return state;
  }
}
