import React, { useContext, createContext, ReactNode, useState } from 'react'


interface ShoppingContextProps {
    children: ReactNode
}

interface CarItems {
    id: number;
    count: number;
    type: string
}

interface ShoppingFn {
    addGood: (id: number, type: string) => void;
    subGood: (id: number) => void,
    getTotalCount: () => number,
    clearCar: () => void,
    getCurcentCount: (id: number) => number
}

const ShoppingCtx = createContext({} as ShoppingFn)


// export const useShoppingContext = useContext(ShoppingCtx)
export function useShoppingContext() {
    return useContext(ShoppingCtx)
}

export function ShoppingContext({ children }: ShoppingContextProps) {
    const [carItems, setCarItems] = useState<CarItems[]>([])

    const addGood = (id: number, type: string) => {
        console.log(carItems)
        const res = carItems.find(item => item.id === id)
        console.log(res)
        if (res) {
            setCarItems(pre =>
                pre.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            count: item.count + 1
                        }
                    } else {
                        return item
                    }
                })
            )
        } else {
            setCarItems(pre => {
                return [...pre, {
                    id,
                    type,
                    count: 1
                }]
            })
        }
    }

    const subGood = (id: number) => {
        const res = carItems.find(item => item.id === id)
        if (res) {
            setCarItems(pre =>
                pre.map(item => {
                    if (item.id === id) {
                        if (item.count === 1) {
                            return {
                                ...item,
                                count: 0
                            }
                        } else {
                            return {
                                ...item,
                                count: item.count - 1
                            }
                        }
                    } else {
                        return item
                    }
                })
            )
        }
    }

    const clearCar = () => {
        setCarItems([])
    }

    const getTotalCount = () => {
        return carItems.length
    }

    const getCurcentCount = (id: number) => {
        return carItems.find(item => item.id === id)?.count ?? 0
    }



    return (
        <ShoppingCtx.Provider value={{ addGood, subGood, getTotalCount, clearCar, getCurcentCount }}>
            {children}
        </ShoppingCtx.Provider >
    )
}