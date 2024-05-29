import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const { title, authorName, imageUrl, category, description, pdfUrl } = useLoaderData();

  const BookCategories = [
    "Fiction", "Non-Fiction", "Science Fiction", "Fantasy", "Mystery", "Thriller", "Romance", "Historical",
    "Biography", "Self-Help", "Children's", "Young Adult", "Graphic Novels", "Comics", "Poetry", "Drama",
    "Classics", "Adventure", "Horror", "Cooking", "Art", "Travel", "Science", "Technology", "Health",
    "History", "Philosophy", "Religion", "Education", "Business", "Law", "Music", "Sports", "Politics",
    "Psychology", "Spirituality", "True Crime", "Parenting", "Humor"
  ];

  const [selectedBookCategories, setSelectedCategorie] = useState(category);

  const handleChangeSelectedValue = (event) => {
    setSelectedCategorie(event.target.value);
  }

  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = selectedBookCategories;
    const description = form.description.value;
    const pdfUrl = form.pdfUrl.value;

    const bookObj = {
      title, authorName, imageUrl, category, description, pdfUrl
    };

    // send data to db
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book Edited Successfully!");
      form.reset();
    })
    .catch(error => {
      console.error("Error editing book:", error);
      alert("Failed to edit book.");
    });
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit Book</h2>

      <form className="lg:w-[1180px] flex flex-col gap-4" onSubmit={handleUpdate}>
        {/* First Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* title */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="title" value="Book Title" className='text-xl'/>
            </div>
            <TextInput id="title" type="text" name='title' placeholder='Book Name' required defaultValue={title}/>
          </div>

          {/* author */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="authorName" value="Author Name" className='text-xl'/>
            </div>
            <TextInput id="authorName" type="text" name='authorName' placeholder='Author Name' required defaultValue={authorName}/>
          </div>
        </div>

        {/* Second Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* imageUrl */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="imageUrl" value="Book Image Url" className='text-xl'/>
            </div>
            <TextInput id="imageUrl" type="text" name='imageUrl' placeholder='Book Image Url' required defaultValue={imageUrl}/>
          </div>

          {/* Category */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="inputState" value="Book Category" className='text-xl'/>
            </div>
            <select id='inputState' name='category' className='w-full rounded' value={selectedBookCategories} onChange={handleChangeSelectedValue}>
              {BookCategories.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Third Row */}
        <div>
          {/* Description */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="description" value="Book Description" className='text-xl'/>
            </div>
            <Textarea id="description" type="text" name='description' placeholder='Write Your Book Description' required rows={6} defaultValue={description}/>
          </div>
        </div>

        {/* Forth Row */}
        <div>
          {/* Pdf UrL */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="pdfUrl" value="Book PDF URL" className='text-xl'/>
            </div>
            <TextInput id="pdfUrl" type="text" name='pdfUrl' placeholder='Book PDF URL' required defaultValue={pdfUrl}/>
          </div>
        </div>

        <button type='submit' className='bg-blue-400 w-full text-white font-semibold px-5 py-3 text-lg rounded hover:bg-black transition-all duration-300'>
          Edit Book
        </button>
      </form>
    </div>
  );
}

export default EditBooks;
