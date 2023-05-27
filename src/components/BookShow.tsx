import { Book } from "../typeSchemas/bookInterface";
import { useState } from "react";
import BookEdit from "./BookEdit";

interface DeleteBookProps {
    deleteBook: (id: string) => void;
}

interface UpdateBookProps {
    updateBook: (id: string, newTitle: string, newAuthor: string) => void;
}

function BookShow({ title, id, author, deleteBook, updateBook }: Book & DeleteBookProps & UpdateBookProps) {
    const [editVisible, setEditVisible] = useState(false);

    const handleDelete = (): void => {
        deleteBook(id);
    };

    const handleEdit = (): void => {
        setEditVisible(!editVisible);
    }

    let content = <div> <h2 className="title">{title}</h2> <div>by</div> <h3>{author}</h3> </div>;
    
    if (editVisible)
    {
        content = <BookEdit currentTitle={title} currentId={id} currentAuthor={author} updateBook={updateBook} handleEdit={handleEdit}/>
    }

    return (
    <div className="book-show">
        <img
            alt="books"
            src={`https://picsum.photos/seed/${id}/200/200`}
        />
        {content}
        <div className="actions">
            <button className="edit" onClick={handleEdit}>
                Edit!
            </button>            
            <button className="delete" onClick={handleDelete}>
                Delete!
            </button>
        </div>
    </div>
    );
}

export default BookShow;