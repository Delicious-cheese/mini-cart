import React, { useContext, createContext, ReactNode, useState } from 'react'

const ShoppingCtx = createContext({})

interface ShoppingContextProps {
    children: ReactNode
}

interface CarItems {
    id: number;
    count: number;
    type: string
}

// export const useShoppingContext = useContext(ShoppingCtx)
export function useShoppingContext() {
    return useContext(ShoppingCtx)
}

export function ShoppingContext({ children }: ShoppingContextProps) {
    const [carItems, setCarItems] = useState<CarItems[]>([])

    return (
        <ShoppingCtx.Provider value={{ 'a': 1 }}>
            {children}
        </ShoppingCtx.Provider>
    )
}