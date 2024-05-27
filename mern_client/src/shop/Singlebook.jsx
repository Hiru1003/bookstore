import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Singlebook = () => {
  // Fetch the data loaded by the loader function
  const book = useLoaderData();

  if (!book) {
    return <div>Loading...</div>; // Add loading indicator or handle null case
  }

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={book.imageUrl} alt={book.title} className='h-96'/>
        <h2 className='text-4xl font-bold'>{book.title}</h2>
        <p className='text-xl font-semibold'>{book.authorName}</p>
        <p className='text-xl'>{book.description}</p>
    </div>
  );
};

export default Singlebook;
