import "./popup.css";
import { useStateContext } from '../../context/contextProvider';
import { useTableContext } from "../../context/tableProvider";



const Popup = () => {
  const {value, toggleValue, inpValue, submitItem, handleInput, items} = useStateContext();
  const {itemData, setItemData} = useTableContext()
  
  function newTable(){

    const ids = itemData.map(item => item.id)
     if(ids.includes(items.length)){
      return
    }else{
      const objArr = {id: items.length, data: []}
      setItemData([...itemData, objArr]);
    } 
  } 
  return (
    <div>
      {value ? <div className="popup-layout">
        <div className="popup-layout_div">
          <h1>New Table</h1>
          <div className="popup-layout_div_input">
            <h3>Table name</h3>
            <input type="text" placeholder="Write here" onChange={handleInput} value={inpValue} />
          </div>
          <div className="popup-layout_div_buttons">
            <button className="cancel-btn" onClick={() => toggleValue()}>Cancel</button>
            <button className="create-btn" onClick={() => {toggleValue(); submitItem(); newTable()}}>Create</button>
          </div>
        </div>
      </div> : <></>}
    </div>)

  
}

export default Popup
