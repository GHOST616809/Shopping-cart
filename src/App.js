 
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Smartphones from './components/Smartphones';


function App() {
  return (
    <div  >
      <Router>
      <Navbar></Navbar>
       <Routes>
       <Route path="/Home" element={<Home></Home>}>
      
    
    </Route>
    <Route path="/Cart" element={<Cart></Cart>}>
    
    
    </Route>
    <Route path="/Smartphones" element={<Smartphones></Smartphones>}>
    
    
    </Route>
    
    

    </Routes>
       
    </Router>
    </div>
  );
}

export default App;
