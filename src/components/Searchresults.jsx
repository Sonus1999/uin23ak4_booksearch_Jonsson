import React from 'react'
import BookCard from './Bookcard'

export default function Searchresults({ books }) {
  return (
    <div>
      {books?.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  )
}

