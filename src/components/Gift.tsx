import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data.json'
import GoodItem from './GoodItem';

const Gift = () => {
    return (
        <Container className='pt-3'>
            <Row lg={3} md={2} xs={1} className="g-3">
                {data["gift"].map(item => (
                    <Col key={item.id} >
                        <GoodItem {...item} type="gift" />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Gift