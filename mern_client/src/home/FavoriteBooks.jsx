import React, { useEffect, useState } from 'react';
import Bookcard from '../components/Bookcard';

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data)) // Corrected the typo
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  return (
    <div>
      <Bookcard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default FavoriteBooks;
