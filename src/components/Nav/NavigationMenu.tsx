import "./nav.css";
import { useStateContext } from "../../context/contextProvider";
import { useTableContext } from "../../context/tableProvider";

const NavigationMenu= () => {
  const {toggleValueTable} = useStateContext();
  const {num} = useTableContext()

  return (
    <div className="task-manager_nav-menu element-spacing">
      <ul>
        <li>
          {
            num === null || num === undefined ? <button onClick={()=>{toggleValueTable()}} disabled>Create Task</button>
            : <button onClick={()=>{toggleValueTable()}}>Create Task</button>
          }
          </li>
        <li><p>Search</p></li>
        <li><p>Filter</p></li>
      </ul>
    </div>
  )
}

export default NavigationMenu
