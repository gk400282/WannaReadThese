import { useState } from 'react';

interface AddBookProps {
  addBook: (title: string, author: string) => void;
}

function BookCreate({ addBook }: AddBookProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book to Your Read List</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleTitleChange} />
        <label>Author</label>
        <input className="input" value={author} onChange={handleAuthorChange} />
        <button className="button" type="submit">Add!</button>
      </form>
    </div>
  );
}

export default BookCreate;
