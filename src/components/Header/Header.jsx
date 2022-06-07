import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

import logo from "../../assets/images/logo.png";

// import content from "./data.js";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="60"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Списки фільмів" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Мій Топ</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Вже дивився</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Підбірки друзів
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">Вішліст</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Розібрати</Nav.Link>
            <Nav.Link href="#">Спитати у бота</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
