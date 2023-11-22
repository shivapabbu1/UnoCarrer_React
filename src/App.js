
import './App.css';
import Mycomp from './Components/Mycomp.js';
import Album from './Nov-22-Components/Album.jsx';
import Mapcomp from './Nov-22-Components/Mapcomp.jsx';
function App() {
  return (
    <>
    
    <h1 style={{textAlign:"center"}}>  I am app  page</h1>
    <h1 style={{textAlign:"center"}}>DAY-1</h1>
    <Mycomp/>
    <hr></hr>
   <h1 style={{textAlign:"center"}}>Day:2</h1>
    <Mapcomp/>
    <hr></hr>
    <Album/>
    
    </>
    
  );
}

export default App;
