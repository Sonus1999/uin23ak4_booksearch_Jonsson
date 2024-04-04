import React from 'react'

export default function Bookcard({ book }) {

  return (
    <article>
      <h2>{book.title}</h2>
      <p>Author: {book.author_name}</p>
      <p>First published: {book.first_publish_year}</p>
      <p>Rating: {book.ratings_average ? book.ratings_average : 'No rating'}</p>
      {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} />}
      <a href={`https://www.amazon.com/s?k=${book.title}`}>Buy on Amazon</a>
    </article>
  )
}

 


