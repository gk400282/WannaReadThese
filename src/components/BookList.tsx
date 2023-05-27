import { Book } from "../typeSchemas/bookInterface";
import BookShow from "./BookShow";

interface BookListProps {
  books: Book[];
}

interface DeleteBookProps {
    deleteBook: (id: string) => void;
  }
  
  interface UpdateBookProps {
      updateBook: (id: string, newTitle: string, newAuthor: string) => void;
  }

function BookList({ books, deleteBook, updateBook }: BookListProps & DeleteBookProps & UpdateBookProps) {
  const renderedBooks = books.map((each) => (
    <BookShow
      key={each.id}
      title={each.title}
      id={each.id}
      author={each.author}
      deleteBook={deleteBook} 
      updateBook={updateBook}
    />
  ));

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;