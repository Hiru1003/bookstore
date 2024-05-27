import React, { useEffect, useState } from 'react';
import Bookcard from '../components/Bookcard';

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data)) 
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  return (
    <div>
      <Bookcard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBooks;
