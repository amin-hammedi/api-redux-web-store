import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegHeart } from "react-icons/fa";

import { Button, Card } from "react-bootstrap";
const ItemCard = ({ item }) => {
  return (
    <div>
      <Card>
        <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Title>{item.muscle}</Card.Title>
          <Card.Text>{item.equipment}</Card.Text>
          <div className="bs">
            <Button variant="primary">Instructions</Button>
            <FaRegHeart className="heart" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCard;
