import { useContext,createContext, useState, useEffect, Children  } from "react"

const myContext = createContext<unknown | null>(null);

export interface Props {
  Children: React.ReactNode;
}
const contextProvider = ({Children}:Props) => {
    
    const miCartContext = cartProvider()
    return (
        <myContext.Provider value={miCartContext}>{Children}</myContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(myContext);
}

const cartProvider = () => {
   
    return {
        
    }
}
export default contextProvider