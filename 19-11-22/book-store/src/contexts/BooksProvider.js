import { createContext, useState } from "react";
import data from "../data";

export const BooksContext = createContext();

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState(data);
  const [basket, setBasket] = useState(0);

  return (
    <BooksContext.Provider value={{ books, basket, setBasket }}>
      {children}
    </BooksContext.Provider>
  );
}
