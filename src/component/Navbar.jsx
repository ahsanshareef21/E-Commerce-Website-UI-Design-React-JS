import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaApple } from "react-icons/fa";
import { GiSlicedBread , GiClothes } from "react-icons/gi";
// import { GiClothes } from "react-icons/gi";
// import Faq from "./component/Faq/Faq";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Faq from "./Faq/Faq";
// import Contact from "./contact/Contact"

const Navbr = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="avatar"
              width={150}
              height={30}
              src="https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
              alt="Gregorio Y. Zara"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <button>
                <NavDropdown title="Grocery" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    <FaApple />
                    Grocery
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action4">
                    <GiSlicedBread /> Bakery
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action4">
                    <GiSlicedBread /> Bag
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action5">
                    <GiClothes />
                    Cloths
                  </NavDropdown.Item>
                </NavDropdown>
              </button>

              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form> */}
            </Nav>
          </Navbar.Collapse>
        </Container>

        <div className="nav1">
          <Nav.Link href="#action1" className="nav2">
            Shop
          </Nav.Link>
          <Nav.Link href="#action2" className="nav2">
            Offer
          </Nav.Link>
          <Nav.Link href="#" className="nav2">
            FAQ
          </Nav.Link>
          <Nav.Link href="#action2" className="nav2">
            Contacts
          </Nav.Link>

         

          {/* <button>
            <Nav.Link href="#action2" className="nav2">
              Log-in
            </Nav.Link>
          </button>

          <button>
            <Nav.Link href="#action2" className="nav2">
            Join
            </Nav.Link>
          </button> */}
        </div>
      </Navbar>
    </div>
  );
};

export default Navbr;
