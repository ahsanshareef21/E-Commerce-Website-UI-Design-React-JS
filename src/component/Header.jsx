import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [image, setImage] = useState(
    "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=1920&q=75"
  );

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="head1">
          <h1>Groceries Delivered in 90 Minute</h1>
          <div>
            <div>
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </div>
            <br/>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search  your Products Here"
                className="me-auto"
                aria-label="Search "
              />
              <Button variant="outline-primary">Search </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
