import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './Extra.css';
import { Book } from './typeSchemas/bookInterface';


function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = (title: string, author: string): void => {
    setBooks([...books, { id: crypto.randomUUID(), title, author }]);
  };

  const updateBook = (id: string, newTitle: string, newAuthor: string): void => {
    setBooks([...books.map((eachBook) => {
      if (eachBook.id == id)
      {
        return {...eachBook, title: newTitle, author: newAuthor};
      }
      return eachBook;
    })]);
  }

  const deleteBook = (id: string): void => {
    setBooks([...books.filter((eachBook) => eachBook.id !== id)]);
  };

  return (
    <div className="app">
      <h1>Read List</h1>
      <BookList updateBook={updateBook} deleteBook={deleteBook} books={books} />
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;
