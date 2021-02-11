import * as actions from "../action/actionType";

const testData = require("../data/data.json");

export default function employeeData(state = testData, action) {
  console.log(action);
  switch (action.type) {
    case actions.EMPLOYEE_DATA:
      return action.data;
    default:
      return state;
  }
}
