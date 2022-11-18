import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../assets/tao.png'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'

const MyNavBar = () => {
    return (
        <Navbar bg="light" style={{ height: '60px' }}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={imgLogo} height="30" alt="" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link to='/' as={NavLink}>主页</Nav.Link>
                    <Nav.Link to='clothes' as={NavLink} >衣服</Nav.Link>
                    <Nav.Link to='/electronic' as={NavLink}>电器</Nav.Link>
                    <Nav.Link to='/gift' as={NavLink}>纪念品</Nav.Link>
                </Nav>
                <Button
                    variant="outline-warning"
                    className='rounded-circle d-flex justify-content-center align-items-center'
                    style={{ height: '34px', width: '34px', position: 'relative' }}
                >
                    {/* <img src="src/assets/car.png" height="23" alt="" /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                    >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '20px', width: '20px', position: 'absolute', right: '-10px', bottom: '-5px', backgroundColor: 'red', borderRadius: '50%', color: 'white' }}>3</div>
                </Button>
            </Container>
        </Navbar >
    )
}

export default MyNavBar