import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Popup from './components/Popup/Popup.tsx';
import { MyContextProvider} from './context/contextProvider.tsx';
import { TableContextProvider } from './context/tableProvider.tsx';
import TaskPopup from './components/Popup/TaskPopup.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyContextProvider>
    <TableContextProvider>
      <TaskPopup/>
      <Popup/> 
      <App/>
    </TableContextProvider>
    </MyContextProvider>
  </React.StrictMode>
)
