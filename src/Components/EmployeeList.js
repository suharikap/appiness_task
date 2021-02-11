import React from "react";
import "./EmployeeList.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as dataActions from "../action/data";

function EmployeeList(props) {
  return (
    <div class="table_position">
      <h1>Employee List</h1>
      <table class="center">
        <thead>
          <tr class="table_heading">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Nmber</th>
          </tr>
        </thead>
        {props.data.user.map((data) => (
          <tbody>
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>{data.email}</td>
              <td>{data.phoneNo}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(dataActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
