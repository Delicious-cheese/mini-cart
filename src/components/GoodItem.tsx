import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingContext } from '../context/ShoppingContext'

type GoodItemProps = {
    name: string,
    price?: number,
    imgUrl: string,
    id: number,
    type: string,
    limit: number
}

const GoodItem = ({ name, imgUrl, id, type, limit, price }: GoodItemProps) => {
    const { addGood, getCurcentCount } = useShoppingContext()

    const handleAdd = (id: number, type: string) => {
        if (!getCurcentCount(id))
            addGood(id, type)
    }


    return (
        <Card className='pt-2'>
            <Card.Img variant="top" src={imgUrl} height="260" style={{ objectFit: 'contain', }} />
            <Card.Body>
                <Card.Title className='text-center'>{name}</Card.Title>
                <Card.Text className='d-flex justify-content-center'>
                    <span>
                        价格:{price}&yen;
                        <span style={{ marginLeft: '7px', color: '#F4511E', fontSize: '.9em' }}>限量:{limit}</span>
                    </span>
                </Card.Text>
                {/* {
                    count > 0
                        ? (
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button onClick={() => addGood(id, type)} variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '26px', height: '26px', marginRight: '10px' }} >
                                    <span style={{ fontSize: '16px' }}>+</span>
                                </Button>
                                <span>数量: {count}</span>
                                <Button onClick={() => subGood(id)} variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '26px', height: '26px', marginLeft: '10px' }} >
                                    <span style={{ fontSize: '16px' }}>-</span>
                                </Button>
                            </div>
                        )
                        : (
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button variant="primary" style={{ backgroundColor: '#FD8848', border: 'none' }} onClick={() => addGood(id, type)}>加入购物车</Button>
                            </div>
                        )
                } */}
                <div className='d-flex justify-content-center align-items-center' >
                    <Button variant="primary"
                        style={{ backgroundColor: '#FD8848', border: 'none', position: 'relative' }}
                        onClick={() => handleAdd(id, type)}
                    >
                        加入购物车
                        {
                            getCurcentCount(id) > 0
                            &&
                            <div
                                className='rounded-circle d-flex justify-content-center align-items-center'
                                style={{ width: '20px', height: '20px', backgroundColor: '#E6EE9C', position: 'absolute', right: '-10px', bottom: '-4px', boxShadow: '0 0 10px #FFA000' }}
                            >

                                <img height="16" width="16" src="src/assets/car.png" alt="" />
                            </div>
                        }

                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default GoodItem