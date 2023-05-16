import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Cards from "./Cards";


function Products() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-sm-3 bg-primary text-white p-3">
          <NavDropdown
            title="Fruits And Vegitables"
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Fruits</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Vegitable</NavDropdown.Item>
          </NavDropdown>

          {/* 🌟 Item 2 */}

          <br />

          <NavDropdown title="Fish And Meat" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Meat</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Fish</NavDropdown.Item>
          </NavDropdown>

          {/* 🌟 Item 3 */}
          <br />
          <NavDropdown title="Home And Cleaning" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Home</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Cleaning</NavDropdown.Item>
          </NavDropdown>

          {/* 🌟 Item 4 */}
          <br />
          <NavDropdown title="Health And Beauty" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Cream</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Bath</NavDropdown.Item>
          </NavDropdown>

          {/* 🌟 Item 5 */}
          <br />
          <NavDropdown
            title="Fruits And Vegitables"
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Fruits</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Vegitable</NavDropdown.Item>
          </NavDropdown>

          {/* 🌟 Item 6 */}
          <br />
          <NavDropdown title="Dairy An Cream" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Milk</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Butter</NavDropdown.Item>
          </NavDropdown>

          {/* 🌟 Item 7 */}
          <br />
          <NavDropdown title="Cooking" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Oil</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Rice</NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="col-sm-9 bg-dark text-white p-3">
          {/* 🌟 🌟  Row 1  */}
          <div className="row">
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
          </div>
          <br />

          {/* 🌟 🌟 Row 2   */}

          <div className="row">
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
          </div>
          <br />

          {/* 🌟🌟 Row 3 */}

          <div className="row">
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
          </div>
          <br />

          {/* 🌟🌟 Row 4 */}
          <div className="row">
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
            <div className="col-sm-4">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
