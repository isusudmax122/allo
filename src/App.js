import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";
import Image from "./components/Image";
import { user } from "./user";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!!user.firstName && (
          <img
            variant="top"
            src={user.avatar}
            alt={"avatar"}
            className="rounded"
            width={50}
          />
        )}
        Hello {!!user.firstName ? user.firstName : "there"}
      </div>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Card.Text>
            Price: $<Price />
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
