import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import logo from '../../assets/images/logo-white-2.png'
import logo2 from '../../assets/images/logo-1.png'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function BrandExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="" variant='dark' sticky='' expand={expand} className="mb-3 p-3 navbeg">
          <Container fluid >
            {/* <Navbar.Brand href="#"><img src={logo} height={40} alt="logo" /></Navbar.Brand> */}
            <Navbar.Brand href="#"><img src={logo} height={40} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >  
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo2} height={40} alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fw-bold">
                  <Nav.Link className='me-4 navcolor' href="#action1">Home</Nav.Link>
                  <Nav.Link className='me-4 navcolor' href="#action">Contact</Nav.Link>
                  <NavDropdown className='me-4'
                    title="Properties"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3 navcolor">properties</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Property 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Property 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Property 3
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className='me-4' href="#action2">Members</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <span className='divider'>|</span>
                  <Nav className='nav1'>
                     <Nav.Link href='#login'>
                      Login <b>/</b>
                     </Nav.Link>
                     <Nav.Link href='#register'>
                      Register
                     </Nav.Link>
                  </Nav>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
         
         <div className="text">
            <div> 
              <h1> Your Property, Our Priority.</h1>
              <p>From as low as $10 per day with limited time offer discont</p>
            </div>
            <span>
              <button className='button1'>Rent</button> 
              <button className='button2'>Buy</button>
            </span>
         </div>
    </>
  );
}

export default BrandExample;