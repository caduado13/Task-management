import "./popup.css";
import { useStateContext } from '../../context/contextProvider';
import { useTableContext } from "../../context/tableProvider";

const TaskPopup = () => {
  const {valueTable, toggleValueTable} = useStateContext();

  const {
    inputTask,
    inputPeople,
    inputStatus,
    inputDate,
    handleInputTask,
    handleInputPeople,
    handleInputStatus,
    setTrData,
    setInputTask,
  } = useTableContext();

const handleObject = () => {
  if(inputTask && inputPeople && inputStatus){
    setTrData({task: inputTask, people: inputPeople, status: inputStatus, date: inputDate});
    setInputTask("")
  }
}

  return (
    <div>
      {valueTable ? <div className="popup-layout">
        <div className="popup-layout_div">
          <h1>New Task</h1>
          <div className="popup-layout_div_input-task-popup">
            <input type="text" placeholder="Write task here" onChange={handleInputTask} value={inputTask}/>
            <input type="text" placeholder="Write people here" onChange={handleInputPeople} value={inputPeople}/>
            <select value={inputStatus} onChange={handleInputStatus}>
              <option value="Em andamento" >Em andamento</option>
              <option value="Feito">Feito</option>
              <option value="Parado">Parado</option>
            </select> 
            <input type="text" placeholder="date" value={inputDate} readOnly/>
          </div>
          <div className="popup-layout_div_buttons">
            <button className="cancel-btn" onClick={() => toggleValueTable()}>Cancel</button>
            <button className="create-btn" onClick={() => {toggleValueTable(); handleObject()}}>Create</button>
          </div>
        </div>
      </div> : <></>}
    </div>)

  
}

export default TaskPopup