import "./sidebar.css";
import {AiFillHome, AiFillBook} from "react-icons/ai";
import {BsFillFilePlusFill} from "react-icons/bs";
import { useStateContext } from "../../context/contextProvider";
import { Link } from "react-router-dom";
import List from "../List/List";
import { useTableContext } from "../../context/tableProvider";


const iconsType:{icon: React.ReactElement, text: String}[] = [
  {
    icon: <AiFillHome/>,
    text: "Home"
  },{
    icon: <AiFillBook/>,
    text: "My work"
  }
]


const Sidebar = () => {
  const {toggleValue, items} = useStateContext();
  const {setNum} = useTableContext()

  return (
    <div className="task-manager_sidebar-container">
      <div className="task-manager_sidebar-container_menu-home">
          {iconsType.map((item, index) =>(
            <p key={index}>
              <Link to = {"/"} className="link-style" onClick={()=>{setNum(null)}}>
                <span className="icon">{item.icon}</span>
                <span className="icon">{item.text}</span>
              </Link>
            </p>
          ))}
      </div>
      <div className="task-manager_sidebar-container_inputs">
        <input type="text" placeholder="Search"/>
        <span onClick={ () => toggleValue()} ><BsFillFilePlusFill size = "25"/></span>
      </div>
      <div className="task-manager_sidebar-container_work-container">
         <List items={items}/>
      </div>
    </div>
  )
}

export default Sidebar
