import {ReactNode, createContext, useState, useContext} from "react";

type MyContextProps = {
    children: ReactNode
}

type ItemType = {
    id: number;
    text: string;
}

type MyContextType = {
    //States
    value: boolean;
    valueTable: boolean;
    taskTitle: string;
    inpValue: string;
    itemObj : ItemType;
    items: ItemType[];

    //Functions
    toggleValue: ()=> void;
    toggleValueTable: ()=> void;
    takeTitle: (taskValue:string | null) => void;
    handleInput: (e:React.ChangeEvent<HTMLInputElement>) => void;
    submitItem: () => void;
}

export const  MyContext = createContext<MyContextType>({
    //States
    value: false,
    valueTable: false,
    taskTitle: "",
    inpValue: "",
    itemObj: {id: Number(), text: "" },
    items: [],

    //Functions
    toggleValue: () => {},
    toggleValueTable: () => {},
    takeTitle: () => {},
    handleInput: () => {},
    submitItem: () => {},
})

export const MyContextProvider = ({children}: MyContextProps) =>{
    const [value, setValue] = useState<boolean>(false);
    const [valueTable, setValueTable] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>("");
    const [inpValue, setInpValue] = useState<string>("");
    const [itemObj, setItemObj] = useState<ItemType>({id: Number(), text: ""});
    const [items, setItem] = useState<ItemType[]>([]);
  
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.value;
      const targetId = Number(items.length);
      setInpValue(targetValue)
      setItemObj({id: targetId, text: targetValue})
    }

    const submitItem = () => {
      if(inpValue){
        setItem([...items, itemObj]);
        setItemObj({id: Number(), text: ""})
        setInpValue("")
      }
    }
    
    const toggleValue = () =>{
        setValue((prevState) => !prevState);
    }  
    const toggleValueTable = () =>{
        setValueTable((prevState) => !prevState);
    }  
    const takeTitle = (taskValue:string | null) => {
        if(taskValue){
            setTaskTitle(taskValue)
        }
    }

    return (
    <MyContext.Provider
        value={{
            value, 
            valueTable, 
            taskTitle, 
            itemObj, 
            items,
            inpValue,
            toggleValue, 
            toggleValueTable, 
            takeTitle, 
            handleInput, 
            submitItem,
        }}
    >
        {children}
    </MyContext.Provider>)
}

export const useStateContext = () => useContext(MyContext)