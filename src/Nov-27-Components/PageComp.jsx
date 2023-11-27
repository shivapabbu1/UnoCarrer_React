import React, { Component } from 'react'
import Datastu from "./Data.jsx"
import Pagenation from './Pagenation.jsx'
export default class PageComp extends Component {
    state={
        stu:Datastu,
        perPage:4,

    }
  render() {
    return (
     <>
     <table className="table table-striped">
          <thead>
            
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Roll no</th>
              <th scope='col'>College Name</th>
              
            </tr>
          </thead>
          <tbody>
            {this.state.stu.map((each)=>{
                return(
                    <tr key={each.roll_no}>
                        <td>{each.name}</td>
                        <td>{each.roll_no}</td>
                        <td>{each.college_name}</td>
                    </tr>
                )})}
          </tbody>
        </table>
        <Pagenation totalStudent={this.state.stu.length} studentPerPage={this.state.perPage}/>
     
     </>
    )
  }
}

