import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import Adminpanel from './Adminpanel';
import Verify from './Verify';
import AddEmp from './AddEmp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='Adminpanel' element={<Adminpanel/>}></Route>
      <Route path='Verify' element={<Verify/>}></Route>
      <Route path='Verify/AddEmp' element={<AddEmp/>}></Route>
      
      </Routes>
     </BrowserRouter>
  );
}

export default App;
