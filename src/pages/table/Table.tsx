import "./table.css";
import { useTableContext } from "../../context/tableProvider";



type dataTypes = {
  task: string;
  people: string;
  status: string;
  date : string;
}

type TrType = {
  id: number;
  data:dataTypes[];
}

interface TableProps {
  table?:TrType[]
  id?: string
  num? : number | null
}

const Table: React.FC<TableProps> = ({table, id, num}) => {

  const {setItemData} = useTableContext()


  const handleStatusChange = (tableId:number, rowIndex:number, newStatus:string) => {
    setItemData((prevState) => {
      console.log(prevState)
      const updatedTable = [...prevState] ;
      updatedTable[tableId].data[rowIndex].status = newStatus;
      return updatedTable;
    });
  };

  
  if (!table || table.length === 0) {
    return null;
  }

  return (
    <div id={id}>
      <table >
        <tbody>          
        <tr>
          <th className="th-task">Tarefa</th>
          <th className="th-person">Pessoa</th>
          <th className="th-status">Status</th>
          <th className="th-date">Date</th>
        </tr>
        </tbody>
        <tbody>
          {num == undefined ? <></> : table[num].data.map((item, index) => {
              return(
              <tr key={index}>
                <td className="th-task">{item.task}</td>
                <td className="th-task">{item.people}</td>
                <td style={{textAlign: "center"}}>
                  <select value={item.status} onChange={(e)=>{handleStatusChange(num, index, e.target.value)}}
                    className= {`${"select-status"} ${item.status == "Em andamento" ? "yell" :item.status == "Feito" ? "green": "red"} `}
                  >
                    <option value="Em andamento" className="yell" >Em andamento</option>
                    <option value="Feito" className="green">Feito</option>
                    <option value="Parado" className="red">Parado</option>
                  </select> </td>
                <td style={{textAlign: "center"}}>{item.date}</td>
              </tr>
              )            
          })}  
        </tbody>
      </table>
    </div>
  )
}

export default Table
