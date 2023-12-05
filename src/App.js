
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
     <h1 style={{textAlign:"center"}}>Day:4</h1>
   
   <div>
  <StudentTable/>

   </div>
  <h1 style={{textAlign:"center"}}>Day:5 && Day-6</h1>
<div>

  <PropsDemo name={"shiva"} course={"Mern FullStack"} /> 
  <p>"React"</p>
  <PropsDemo name={"kiran"} course={"JavaFullStack"}/>
  <p>Javascript</p>
  <PropsDemo name={"Lucky"} course={"Mean FullStack"}/>
</div>
<div>
  <PageComp/>
</div>


 <div>
   <h1 style={{textAlign:"center"}}>Dec-4</h1> 
<NavBar/>
<Routes>
  <Route path='/' exact Component={Login}/>
  <Route path='/home' Component={Home}/>
  <Route path='/about' Component={About}/>
  <Route path='/contact' Component={Contact}/>
</Routes>
</div> 
  
  <div>
<h1 style={{textAlign:"center"}}>Dec-5</h1>
<LoginForm/>
</div>
  
    </>
    
  );
}

export default App;

