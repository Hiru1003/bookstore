import React, { useState } from 'react';
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

const Uploadbook = () => {
  const BookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Thriller",
    "Romance",
    "Historical",
    "Biography",
    "Self-Help",
    "Children's",
    "Young Adult",
    "Graphic Novels",
    "Comics",
    "Poetry",
    "Drama",
    "Classics",
    "Adventure",
    "Horror",
    "Cooking",
    "Art",
    "Travel",
    "Science",
    "Technology",
    "Health",
    "History",
    "Philosophy",
    "Religion",
    "Education",
    "Business",
    "Law",
    "Music",
    "Sports",
    "Politics",
    "Psychology",
    "Spirituality",
    "True Crime",
    "Parenting",
    "Humor",
  ]
  const [selectedBookCategories, setSelectedCategorie] = useState(BookCategories[0]);
  const handleChangeSelectedValue =(event)=> {
    //console.log(event.target.value);
    selectedBookCategories(event.target.value);
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload Book</h2>

      <form className="lg:w-[1180px] flex flex-col gap-4">
        {/* First Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    
          {/* title */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="title" value="Book Title" />
            </div>
            <TextInput id="title" type="text" name='title' placeholder='Book Name' required />
          </div>

          {/* author */}  
          <div>
            <div className="mb-3 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" name='authorName' placeholder='Author Name' required />
          </div>
        </div>


        {/* Second Row */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    
          {/* imageUrl */}
          <div>
            <div className="mb-3 block">
              <Label htmlFor="imageUrl" value="Book Image Url" />
            </div>
            <TextInput id="imageUrl" type="text" name='imageUrl' placeholder='Book Image Url' required />
          </div>

          {/* Category */}  
          <div>
            <div className="mb-3 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategories} onChange={handleChangeSelectedValue}>
              {BookCategories.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>

          </div>
        </div>


      </form>
    </div>
  );
}

export default Uploadbook;
