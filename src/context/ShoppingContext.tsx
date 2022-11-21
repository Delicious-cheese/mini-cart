import React, { useContext, createContext, ReactNode } from 'react'

const ShoppingCtx = createContext({})

interface ShoppingContextProps {
    children: ReactNode
}

// export const useShoppingContext = useContext(ShoppingCtx)
export function useShoppingContext() {
    return useContext(ShoppingCtx)
}

export function ShoppingContext({ children }: ShoppingContextProps) {
    return (
        <ShoppingCtx.Provider value={{ 'a': 1 }}>
            {children}
        </ShoppingCtx.Provider>
    )
}