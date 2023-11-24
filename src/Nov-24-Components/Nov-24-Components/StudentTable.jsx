import React, { Component } from 'react';
import Data from "./StudentData.jsx";

class StudentTable extends Component {
  state = {
    StudList: Data,
    displayedData: [], 
  }

  showData = () => {
    console.log("Reset button is clicked");
    this.setState({ displayedData: this.state.StudList }); 
  }

  filterPassed = () => {
    const passedStudents = this.state.StudList.filter(student => (
      student.maths_marks > 35 && student.science_marks > 35 && student.social_marks > 35
    ));

    this.setState({ displayedData: passedStudents });
  }

  filterFailed = () => {
    const failedStudents = this.state.StudList.filter(student => (
      student.maths_marks <= 35 || student.science_marks <= 35 || student.social_marks <= 35
    ));

    this.setState({ displayedData: failedStudents });
  }

  filterPassedXYZ = () => {
    const passedStudentsXYZ = this.state.StudList.filter(student => (
      student.schoolname === "XYZ School" &&
      student.maths_marks > 35 && student.science_marks > 35 && student.social_marks > 35
    ));

    this.setState({ displayedData: passedStudentsXYZ });
  }

  filterPassedABC = () => {
    const passedStudentsABC = this.state.StudList.filter(student => (
      student.schoolname === "ABC High School" &&
      student.maths_marks > 35 && student.science_marks > 35 && student.social_marks > 35
    ));

    this.setState({ displayedData: passedStudentsABC });
  }

  filterFailedXYZ = () => {
    const failedStudentsXYZ = this.state.StudList.filter(student => (
      student.schoolname === "XYZ School" &&
      (student.maths_marks <= 35 || student.science_marks <= 35 || student.social_marks <= 35)
    ));

    this.setState({ displayedData: failedStudentsXYZ });
  }

  filterFailedABC = () => {
    const failedStudentsABC = this.state.StudList.filter(student => (
      student.schoolname === "ABC High School" &&
      (student.maths_marks <= 35 || student.science_marks <= 35 || student.social_marks <= 35)
    ));

    this.setState({ displayedData: failedStudentsABC });
  }

  render() {
    return (
      <>
        <div class="d-grid gap-2 d-md-flex justify-content">
          <button type="button" className="btn btn-success"  onClick={this .filterPassed}>Passed</button>
          <button type="button" className="btn btn-danger " onClick={this.filterFailed}>Failed</button>
          <button type="button" className="btn btn-success " onClick={this.filterPassedXYZ}>Passed from XYZ</button>
          <button type="button" className="btn btn-success " onClick={this.filterPassedABC}>Passed from ABC</button>
          <button type="button" className="btn btn-danger " onClick={this.filterFailedXYZ}>Failed from XYZ</button>
          <button type="button" className="btn btn-danger " onClick={this.filterFailedABC}>Failed from ABC</button>
          <button type="button" className="btn btn-primary " onClick={this.showData}>Reset Data</button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>SchoolName</th>
              <th scope='col'>Math Marks</th>
              <th scope='col'>Science Marks</th>
              <th scope='col'>Social Marks</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayedData.map((eachstu) => {
              return (
                <tr key={eachstu.id}>
                  <td>{eachstu.id}</td>
                  <td>{eachstu.name}</td>
                  <td>{eachstu.schoolname}</td>
                  <td>{eachstu.maths_marks}</td>
                  <td>{eachstu.science_marks}</td>
                  <td>{eachstu.social_marks}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default StudentTable;
