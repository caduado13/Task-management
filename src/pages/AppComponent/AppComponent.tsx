import NavigationMenu from "../../components/Nav/NavigationMenu";
import Table from "../table/Table";
import "./appComp.css";
import { useParams } from 'react-router-dom';
import {useEffect} from "react"
import { useTableContext } from "../../context/tableProvider";

type dataTypes  = {
  task: string;
  people: string;
  status: string;
  date : string;
}

type ComponentType = {
  txt?: string
}


const AppComponent = ({txt}:ComponentType) => {

  const {text, id} = useParams();
  const {trData, trDataItems, setTrDataItems, itemData, setItemData, num} = useTableContext();

  const handleArr =  () => {
    
    const dataArr: dataTypes[] = (() => {
      if (trDataItems.length === 0 || trDataItems[0].task === "") {
        return [trData];
      } else if (trDataItems[0].task !== "") {
        return [...trDataItems, trData];
      } else {
        return [];
      }
    })();
    
    setTrDataItems(dataArr);

    const newTableData =  itemData.map((tabela) => {
      if(tabela.id === num){
        const newData = [...itemData[num].data, trData];
        return {...tabela, data: newData}
      }
      return tabela
    }); 

    setItemData(newTableData)
  };

  useEffect(()=>{
    handleArr();
  }, [trData]);
  
  return (<div className="">
      <div>
        <h1>{text ? text : txt}</h1>
        <h4>sub</h4>
      </div>
      <hr  color='#000'/>
      <div>
        <NavigationMenu/>
      </div>
      {text ?
        <Table table = {itemData} id = {id?.toString()} num = {num}/>
        : <></>
      }
    </div>)
}

export default AppComponent
