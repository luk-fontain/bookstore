import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BookContextProvider } from "./Context/BookContext";

function App() {




  return (
    <BookContextProvider>
      <div className="App">
        <Navbar />
        <AddBook />
        <BookList />
      </div>
    </BookContextProvider>
  );
}

export default App;