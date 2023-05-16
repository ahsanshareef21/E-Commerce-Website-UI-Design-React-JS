import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img2 from "./1.jpg";
import { BsCartPlusFill } from "react-icons/bs";

function Cards() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>
            <div className="itemhead">Product Name</div>
          </Card.Title>
          <Card.Text>
            <div className="itemhead">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </div>
          </Card.Text>

          <Button variant="primary">
            <div className="cartpic">
              <BsCartPlusFill />
              <span> Add To Cart</span>
            </div>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
