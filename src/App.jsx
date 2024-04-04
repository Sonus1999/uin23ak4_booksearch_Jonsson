import React, { useState, useEffect } from 'react'
import Searchresults from './components/Searchresults'
import './styles/main.scss'

function App() {

  const [books, setBooks] = useState([])
  const [search, setSearch] = useState('')
  
  const getBooks = async (result) => {
    const response = await fetch(`https://openlibrary.org/search.json?title=${result}&has_fulltext=true`)
    const data = await response.json()
    setBooks(data.docs)
  };
  
  useEffect(() => {
    getBooks('James+Bond')
  }, []);

  useEffect(() => {
    if (search.length >= 3) {
      getBooks(search)
    }
  }, [search])

  return (
    <>
      <header>
        <h1>E-BOKZ</h1>
          <nav>
            <input type="text" value={search} onChange={(change) => setSearch(change.target.value)}/>
          </nav>
      </header>
      <main>
        <Searchresults books={books} />
      </main>
    </>
  )
}

export default App
