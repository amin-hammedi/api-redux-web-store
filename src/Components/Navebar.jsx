import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";

function Navebar() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Navbar expand="lg" className="siuu" fixed="top">
      <Container fluid className="Container">
        <Navbar.Brand style={{ color: "white" }} href="#">
          Welcome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{ color: "white" }} href="#action2">
              Favorites
            </Nav.Link>
            <div>
              <label className="filter">
                Filter:
                <select value={filter} onChange={handleFilterChange}>
                  <option value="all">All</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </label>
            </div>
          </Nav>
          <Form className="d-flex">
            <Form.Control
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
}

export default Navebar;
