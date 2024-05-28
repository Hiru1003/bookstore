import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className='mt-24 px-4 lg:px-24'> {/* Adjust the top margin */}
      <h2 className='text-4xl font-bold text-center mb-10'>All Books Are Here!</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {books.map(book => (
          <Card
            key={book.id} // Assuming each book has a unique id
            className="max-w-sm mb-10"
          >
            <img src={book.imageUrl}/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.description}
            </p>
            <button className='bg-blue-400 w-full text-white font-semibold px-5 py-3 text-lg rounded hover:bg-black transition-all duration-300'>
                Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
