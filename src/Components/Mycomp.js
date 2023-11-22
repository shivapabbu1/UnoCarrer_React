import React,{Component} from 'react'

class Mycomp extends Component{
  state={
    counter:0,
    emp:[
      {
        id:1,
        name:"shivaprasad",
        dep:"frontend",
        salary:35000
      },
      {
        id:2,
        name:"kirankumar",
        dep:"backend",
        salary:45000
      },{
        id:3,
        name:"shivakumar",
        dep:"fullstack",
        salary:55000
      }

    ]
  }
  getvalue(){
    return this.state.counter === 0 ? "Zero" : this.state.counter ;
  }
  render(){
    return(
      <>
      <div>
      <table className='table table-info ' >
  <thead>
    <tr>
    <th scope=" col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Dept</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    {this.state.emp.map((data,index)=>{
      return(
       <tr 
        key={index}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.dep}</td>
        <td>{data.salary}</td>
       </tr>
       
      )
    })}
  </tbody>
</table>
      </div>
      
      </>
    )
  }
}

export default Mycomp