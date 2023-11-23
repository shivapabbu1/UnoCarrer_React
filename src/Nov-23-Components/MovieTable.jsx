import React, { Component } from 'react'

import Data from './Data.jsx';
 class MovieTable extends Component {
    state={
        list:Data
    }
    deleteMovie = (del) => {
      console.log(" clicked....." + del.id);
      const filterMovies = this.state.list.filter( eachMovie => eachMovie.id != del.id)
      this.setState({list:filterMovies})
    }
  render() {
    return (
      <>
    <table class="table">
    <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Poster</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
        {this.state.list.map((da)=>{
            return(
            <tr>
            
            <td>{da.title}</td>
            <td>{da.Year}</td>
            <td><img src={da.Poster} style={{width:"100px",height:"100px"}}/></td>
            <td><button  className='btn btn-warning' onClick={() => this.deleteMovie(da)}>Delete</button></td>
          </tr>
        )})}
    <tr>
      
    </tr>
  
  </table>
      </>
    )
  }
}
export default MovieTable;