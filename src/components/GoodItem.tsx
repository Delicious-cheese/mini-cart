import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingContext } from '../context/ShoppingContext'

type GoodItemProps = {
    name: string,
    price: number,
    imgUrl: string
}

const GoodItem = ({ name, price, imgUrl }: GoodItemProps) => {
    const count = 1;

    return (
        <Card className='pt-2'>
            <Card.Img variant="top" src={imgUrl} height="260" style={{ objectFit: 'contain', }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                {
                    count > 0
                        ? (
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '26px', height: '26px', marginRight: '10px' }} >
                                    <span style={{ fontSize: '16px' }}>+</span>
                                </Button>
                                <span>数量: {count}</span>
                                <Button variant="primary" className='rounded-circle d-flex justify-content-center align-items-center' size='sm' style={{ backgroundColor: '#FD8848', border: 'none', width: '26px', height: '26px', marginLeft: '10px' }} >
                                    <span style={{ fontSize: '16px' }}>-</span>
                                </Button>
                            </div>
                        )
                        : (
                            <div className='d-flex justify-content-center align-items-center'>
                                <Button variant="primary" style={{ backgroundColor: '#FD8848', border: 'none' }}>加入购物车</Button>
                            </div>
                        )
                }
            </Card.Body>
        </Card>
    )
}

export default GoodItem