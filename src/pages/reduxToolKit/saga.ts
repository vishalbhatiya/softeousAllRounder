import { takeEvery, put, call } from "redux-saga/effects";
import { counterActions } from "./Reducer";

const getEmployee = async () => {
  var employeepromoise = await fetch("http://localhost:8000/employees");
  var employeedata = await employeepromoise.json();
  return employeedata;
};

function* getEmployees() {
  console.log("getEmployees saga function called");
  var employees: [] = yield call(getEmployee);

  console.log(employees);
  yield put(counterActions.getEmployeesSuccess(employees));
}

export function* watcherSaga() {
  yield takeEvery(counterActions.getEmployees, getEmployees);
  // return
}
 
