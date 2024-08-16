
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import TasksPage from "./pages/TasksPage"
import TasksFormPage from "./pages/TasksFormPage"
import Navegation from './components/Navegation';

function App() {
  return (
    <BrowserRouter>
    <Navegation></Navegation>
    <Routes>
      <Route path='/' element={<Navigate to='/task'/>}/>
      <Route path='/tasks' element={<TasksPage/>}/>
      <Route path='/tasks-create' element={<TasksFormPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App