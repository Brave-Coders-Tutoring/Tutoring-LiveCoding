import BooksProvider from "./contexts/BooksProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Product from "./views/Product";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BooksProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </BooksProvider>
    </div>
  );
}

export default App;
