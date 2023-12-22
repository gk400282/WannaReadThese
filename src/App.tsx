import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './Extra.css';
import { Book } from './typeSchemas/bookInterface';


function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = async (): Promise<void> => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, [])

  const addBook = async (title: string, author: string): Promise<void> => {
    const response = await axios.post("http://localhost:3001/books", {
      id: crypto.randomUUID(),
      title,
      author
    })
    setBooks([...books, response.data]);
  };

  const updateBook = async (id: string, newTitle: string, newAuthor: string): Promise<void> => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
      author: newAuthor
    })
    setBooks([...books.map((eachBook) => {
      if (eachBook.id == response.data.id)
      {
        return {...eachBook, ...response.data};
      }
      return eachBook;
    })]);
  }

  const deleteBook = async (id: string): Promise<void> => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks([...books.filter((eachBook) => eachBook.id !== id)]);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList updateBook={updateBook} deleteBook={deleteBook} books={books} />
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;
