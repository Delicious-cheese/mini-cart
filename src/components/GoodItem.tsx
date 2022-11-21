import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useShoppingContext } from '../context/ShoppingContext'

type GoodItemProps = {
    name: string,
    price: number,
    imgUrl: string
}

const GoodItem = ({ name, price, imgUrl }: GoodItemProps) => {
    return (
        <Card className='pt-2'>
            <Card.Img variant="top" src={imgUrl} height="260" style={{ objectFit: 'contain', }} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">加入购物车</Button>
            </Card.Body>
        </Card>
    )
}

export default GoodItem