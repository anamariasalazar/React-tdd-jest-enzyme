import './App.css';
import Login from './Resorces/Login';
import TaskPlanner from './Resorces/TaskPlanner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() { 
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path='/TaskPlanner' element={<TaskPlanner/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;
