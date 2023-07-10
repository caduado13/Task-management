import './App.css';
import AppComponent from './pages/AppComponent/AppComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Sidebar from './components/Sidebar/Sidebar';
import Management from './containers/management/Management';

function App() {

  return (<div className='task-manager'>
    <BrowserRouter basename='/'>
      <Sidebar/>
      <Management>
      <Routes>
        <Route path="/Task-management" element = {<AppComponent txt = {"Home"}/>}></Route>
        <Route path="/Task-management/:id/:text" element={<AppComponent/>}></Route>
      </Routes>
      </Management>
    </BrowserRouter>
  </div>)
}

export default App
