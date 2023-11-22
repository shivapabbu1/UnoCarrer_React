import React, { Component } from 'react'

 class Mapcomp extends Component {
  state={
    counter:99,
    city:[
      {name:"Delhi",code:50009},
      {name:"Hyd",code:90008},
      {name:"Mumbai",code:8776},
      {name:"Agra",code:9765}
    ]
  }
  render() {
    return (
      <>
        <span className='bage bg-danger'>Warning</span>
        <span className='bage bg-primary'>Warning</span>
        <span className='bage bg-info'>Warning</span>

        
          {this.state.city.map((city,index)=>{
            return(
             <div key={index}>
               <h3 >City Name:{city.name}</h3>
               <h6>city code:{city.code}</h6>
              </div>        
              )
           })}
         
      </>
    )
  }
}
export default Mapcomp
