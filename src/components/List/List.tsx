import {BsListTask} from "react-icons/bs";
import {Link} from "react-router-dom";
import { useTableContext } from "../../context/tableProvider";

type ThisItemType = {
  id: number;
  text: string;
}

type UlProps = {
  items: ThisItemType[];
}

const List: React.FC<UlProps> = ({items}) => {

  const {setNum} = useTableContext();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const targetEl = event.target as HTMLElement;
    const elId = Number(targetEl.id);
    setNum(elId)
  };

  return (
    <ul className="task-manager_sidebar-container_work-container_list">
    {items.map((item)=>(
      <Link to={`/Task-management/${item.id}/${item.text}`} className="link-style" key={item.id}>
        <li id={item.id.toString()}  onClick={handleClick}>
          <span style={{display:"flex", padding: "0 5px 0 0"}}><BsListTask/></span>
          {item.text}
        </li> 
      </Link>
    ))}
    </ul>  
  )
}

export default List
