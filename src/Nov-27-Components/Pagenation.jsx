import React, { Component } from 'react'
import _ from "lodash";
 class Pagenation extends Component {
    state={
        allstu:this.props.totalStudent,
        pageCount:this.props.studentPerPage,
        presentPage:1,
        displayData:this.props.data

    }
    
   
  render() {
     const totalPages=this.state.allstu/ this.state.pageCount;
     console.log(totalPages);
      const pageNumber=_.range(1,totalPages+1);
     console.log(pageNumber);

    return (
      <>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
  {pageNumber.map((num)=>{
  return( 
 
   <li class="page-item" key={num}>
    <a class="page-link" href="#" onClick={()=>this.props.pageChange(num)}>{num}</a>
    </li>
     )})
   }
  </ul>
  </nav>
    </>
    )
  }
}
export default Pagenation;
