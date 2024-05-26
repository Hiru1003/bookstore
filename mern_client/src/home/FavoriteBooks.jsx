import React, { useEffect, useState} from 'react'

const FavoriteBooks = () => {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => console.log(date))
  }, [])

  return (
    <div>
      FavoriteBooks
    </div>
  )
}

export default FavoriteBooks
