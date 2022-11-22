import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useShoppingContext } from '../context/ShoppingContext'
// import data from '../data.json'
import data from '../data.json'

interface MyOffCanvasProps {
    show: boolean;
    onHide: () => void
}

const MyOffCanvas = ({ show, onHide }: MyOffCanvasProps) => {

    const { carItems, getTotalCount, getCurcentCount, addGood, subGood, clearCar } = useShoppingContext()
    let totalMonney = 0;

    const handleAddGood = (id: number, limitN: number, curN: number, type: string) => {
        if (curN < limitN)
            addGood(id, type)
    }

    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='d-flex align-items-center'>
                    购物车
                    <img src="src/assets/trash.png" width="20" height="20" alt="" style={{ marginLeft: '10px', cursor: ' pointer' }} onClick={clearCar} />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    carItems.map(item => {
                        const { id, type, count } = item
                        const res = data[type as keyof typeof data].find(item => item.id === id)
                        totalMonney = totalMonney + (res?.price ?? 0) * getCurcentCount(id)

                        return (
                            count > 0 &&
                            (
                                <div key={id} className="d-flex justify-content-between mb-3">
                                    <div>
                                        <img src={res?.imgUrl} height="50" width="50" alt="" className='p-1' style={{ boxSizing: 'content-box', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }} />
                                        <span>{res?.name}</span>
                                    </div>

                                    <div>
                                        <div>
                                            <div className='d-flex justify-content-center align-items-center'>
                                                <Button onClick={() => subGood(id)} variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '19px', height: '19px', marginRight: '7px' }} >
                                                    <span style={{ fontSize: '16px' }}>-</span>
                                                </Button>
                                                <span>数量{getCurcentCount(id)}</span>
                                                <Button onClick={() => handleAddGood(id, res?.limit ?? 1, getCurcentCount(id), type)} variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '19px', height: '19px', marginLeft: '7px' }} >
                                                    <span style={{ fontSize: '16px' }}>+</span>
                                                </Button>
                                            </div>
                                        </div>
                                        <div className='text-muted' style={{ fontSize: '.8rem', marginTop: '7px' }}>
                                            单价: {res?.price}&yen;
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    })
                }
                {
                    getTotalCount() > 0 && (
                        <div className='ms-auto' style={{ width: '130px' }}>
                            总计:{totalMonney}&yen;
                        </div>
                    )
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default MyOffCanvas