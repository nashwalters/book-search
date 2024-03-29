import React, { useState, useEffect } from "react";
import Card from "../SavedCard";
import API from "../../utils/API";

const SavedBooks = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    console.log("[loadBooks] function reached");
    let result = await API.getBooks();

    console.log("[loadBooks]", result.data);
    setBooks(result.data);
  }

  return (
    <div className="bg-light text-black">
      <h4>Saved Books</h4>
      {books.length ? (
        books.map((book, index) => {
          return (
            <Card
              key={index}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              id={book._id}
            />
          );
        })
      ) : (
        <h5 className="text-muted">No Results to Display</h5>
      )}
    </div>
  );
};

export default SavedBooks;
