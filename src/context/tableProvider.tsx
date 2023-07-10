import {ReactNode, createContext, useState, useContext} from "react";

type MyContextProps = {
    children: ReactNode
}

type dataTypes = { //Type of object data
    task: string;
    people: string;
    status: string;
    date : string;
}

type TrType = { //Type of array of tables
    id: number;
    data:dataTypes[];
}

type TableProps = {
    //inputs
    inputTask: string;
    inputPeople:string;
    inputStatus: string;
    inputDate: string;
    
    //inputs states
    setInputTask: React.Dispatch<React.SetStateAction<string>>
    handleInputTask :(e:React.ChangeEvent<HTMLInputElement>) => void;
    handleInputPeople :(e:React.ChangeEvent<HTMLInputElement>) => void;
    handleInputStatus :(e:React.ChangeEvent<HTMLSelectElement>) => void;

    //Object 
    trDataItems: dataTypes[];
    trData: dataTypes;
    itemData: TrType[];
    num: number | null;

    //Object Handling
    setTrData: React.Dispatch<React.SetStateAction<{
        task: string;
        people: string;
        status: string;
        date: string;
    }>>;
    setTrDataItems: React.Dispatch<React.SetStateAction<dataTypes[]>>
    setItemData: React.Dispatch<React.SetStateAction<TrType[]>> 
    setNum: React.Dispatch<React.SetStateAction<number | null>>
}

export const TableContext =  createContext<TableProps>({
    //inputs
    inputTask: "",
    inputPeople: "",
    inputStatus: "",
    inputDate: "",

    //inputs functions
    setInputTask: () => {},
    handleInputTask: ()=>{},
    handleInputPeople: ()=>{},
    handleInputStatus: ()=>{},

    //Array and Objects
    itemData: [{id: Number(), data:[]}],
    trData: {task: "", people: "", status: "", date: ""},
    trDataItems: [],
    num: 0 ,

    //Handling object functions
    setTrData: () => {},
    setTrDataItems: ()=>{},
    setItemData: () => {},
    setNum: () =>{},
})

export const TableContextProvider = ({children}:MyContextProps) => {


    //inputs States
    const [inputTask, setInputTask] = useState<string>("");
    const [inputPeople, setinputPeople] = useState<string>("");
    const [inputStatus, setinputStatus] = useState<string>("Em andamento");
    const [inputDate] = useState<string>(new Date().toLocaleDateString("pt-BR"));
    
    //Object handling
    const [trData, setTrData] = useState<dataTypes>({task:"", people:"", status:"", date: ""})
    const [trDataItems, setTrDataItems] = useState<dataTypes[]>([])
    const [itemData, setItemData] = useState<TrType[]>([{
        id: 0,
        data:[],
    }]);
    const [num, setNum] = useState<null | number>(null)


    const handleInputTask = (e:React.ChangeEvent<HTMLInputElement>) => {
        let targetValue = e.target.value;
        setInputTask(targetValue)
    }
    const handleInputPeople= (e:React.ChangeEvent<HTMLInputElement>) => {
        let targetValue = e.target.value
        setinputPeople(targetValue)
    }
    const handleInputStatus = (e:React.ChangeEvent<HTMLSelectElement>) => {
        let targetValue = e.target.value
        setinputStatus(targetValue)
    }

    return (
        <TableContext.Provider 
            value={{
                inputTask,
                handleInputTask,
                handleInputPeople,
                handleInputStatus,
                inputPeople,
                inputStatus,
                inputDate,
                itemData,
                trDataItems,
                trData,
                setTrData,
                setTrDataItems,
                setItemData,
                setInputTask,
                num, 
                setNum,
            }}
        >
            {children}
        </TableContext.Provider>
    )
}

export const useTableContext = () => useContext(TableContext)