import React from "react";

import { useContext } from "react";
import { BooksContext } from "../contexts/BooksProvider";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Home() {
  const { books, basket, setBasket } = useContext(BooksContext);

  return (
    <div>
      <Container>
        <Row>
          {books.map((book, i) => {
            return (
              <Col key={i}>
                <Card style={{ width: "18rem" }} bg="dark" text="light">
                  <Card.Img variant="top" src={book.image} />
                  <Card.Body bg="Dark">
                    <Card.Title>{book.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {book.autor}
                    </Card.Subtitle>
                    <Card.Text>{book.price}</Card.Text>
                    <Button
                      onClick={() => setBasket(basket + 1)}
                      variant="primary"
                    >
                      Zum Warenkorb hinzufügen
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
