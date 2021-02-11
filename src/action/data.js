import * as actions from "./actionType";

export const employeeData = (data) => ({
  type: actions.EMPLOYEE_DATA,
  data,
});
export const loginData = (data) => ({
  type: actions.LOGIN_DATA,
  data,
});
