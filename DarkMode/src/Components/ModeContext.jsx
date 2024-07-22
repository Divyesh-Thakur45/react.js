import { createContext, useState } from "react";

export const mode = createContext()

export default function TheemChanger({children}){
    const [Theem , setTheem] = useState(true)
    

    const ChangeTheemFun = () => {
        setTheem(!Theem)
    }
    return (
        <mode.Provider value={{Theem,ChangeTheemFun}}>
            {children}
        </mode.Provider>
    )
}