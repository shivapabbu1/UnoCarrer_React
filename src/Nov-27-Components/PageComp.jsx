import React, { Component } from 'react'
import Datastu from "./Data.jsx"
import Pagenation from './Pagenation.jsx'
import _ from 'lodash'
export default class PageComp extends Component {
    state={
        stu:Datastu,
       currentPage:1,
        perPage:4,
     

    }
    pageChange=(d)=>{
      console.log("cilcked"+d);
      this.setState({currentPage:d})
   }
   pageFilter(){
    const startIndex=(this.state.currentPage-1)*this.state.perPage;
    return _(this.state.stu).slice(startIndex).take(this.state.perPage).value();
   }
  

  render() {
   
   const filtredStu=this.pageFilter()
   console.log(this.pageFilter());
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
         
            {this.pageFilter().map(each=>{
                return(
                  
                    <tr key={each.roll_no}>
                        <td>{each.name}</td>
                        <td>{each.roll_no}</td>
                        <td>{each.college_name}</td>
                    </tr>
                )})}
                
          </tbody>
        </table>
        <Pagenation totalStudent={this.state.stu.length} studentPerPage={this.state.perPage} pageChange={this.pageChange }/>
     
     </>
    )
  }
}
