import React from "react";

import { useContext } from "react";
import { BooksContext } from "../contexts/BooksProvider";

import Music from "./mymusic.mp3";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";

import { Link } from "react-router-dom";

export default function Header() {
  const { basket } = useContext(BooksContext);
  const music = new Audio(Music);

  return (
    <div>
      <Navbar className="mb-4" bg="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">Book Store</Link>
          </Navbar.Brand>
          <p>{basket} Produkte im Warenkorb</p>
        </Container>
      </Navbar>
      <div className="mb-4 mx-4">
        <Button
          className="mx-1"
          onClick={() => {
            music.play();
          }}
        >
          Play the Music
        </Button>
        <Button
          className="mx-1"
          onClick={() => {
            music.pause();
          }}
        >
          Stop the Music
        </Button>
        <Button
          className="mx-1"
          onClick={() => {
            music.volume = 1;
          }}
        >
          +
        </Button>
        <Button
          className="mx-1"
          onClick={() => {
            music.volume = 0.2;
          }}
        >
          -
        </Button>
        <Button
          className="mx-1"
          onClick={() => {
            music.volume = 0;
          }}
        >
          Mute
        </Button>
      </div>
    </div>
  );
}
