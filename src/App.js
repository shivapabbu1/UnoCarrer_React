
import './App.css';
import Mycomp from './Components/Mycomp.js';
import Album from './Nov-22-Components/Album.jsx';
import Mapcomp from './Nov-22-Components/Mapcomp.jsx';
import Counter from './Nov-23-Components.jsx/Counter.jsx';
import MovieTable from './Nov-23-Components.jsx/MovieTable.jsx';
function App() {
  return (
    <>
    
    <h1 style={{textAlign:"center"}}>  I am app  page</h1>
   
    <div>
    <h1 style={{textAlign:"center"}}>DAY-1</h1>
    <Mycomp/>
    </div>

    <h1 style={{textAlign:"center"}}>Day:2</h1>
    
    <div>
   <Mapcomp/>
    <hr></hr>
    <Album/>
    </div>

    <h1 style={{textAlign:"center"}}>Day:3</h1>
   
    <div>
   <Counter/>
   <br/>
   <MovieTable/>
    </div>
    
    </>
    
  );
}

export default App;

