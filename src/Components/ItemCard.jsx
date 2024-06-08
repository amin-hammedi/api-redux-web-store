import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Card } from "react-bootstrap";
const ItemCard = ({ item }) => {
  return (
    <div>
      <Card>
        <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Title>{item.muscle}</Card.Title>
          <Card.Text>{item.difficulty}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
