import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
  const {id} = useParams();
  const {title, authorName, imageUrl, category, description, pdfUrl
  } = useLoaderData();



  return (
    <div>
      Edit Books
    </div>
  )
}

export default EditBooks
