import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './Pages/Detail';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Detail/>}>
          
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
