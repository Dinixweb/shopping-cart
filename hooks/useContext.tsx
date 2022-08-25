import { useContext,createContext, useState, useEffect, Children  } from "react"

const myContext = createContext<unknown | null>(null);

export interface child {
  Children: React.ReactNode;
}
export function ContextProvider  ({Children}:child) {
    
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
