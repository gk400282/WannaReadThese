import { useState } from "react";

interface CurrentBook {
    currentTitle: string;
    currentId: string;
    currentAuthor: string;
}

interface UpdateBookProps {
    updateBook: (id: string, newTitle: string, newAuthor: string) => void;
}

interface HandleEditProps {
    handleEdit: () => void;
}

function BookEdit({currentTitle, currentId, currentAuthor, updateBook, handleEdit}: CurrentBook & UpdateBookProps & HandleEditProps) {
    const [title, setTitle] = useState(currentTitle);
    const [author, setAuthor] = useState(currentAuthor);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };

    const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setAuthor(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        updateBook(currentId, title, author);
        setTitle('');
        setAuthor('');
        handleEdit();
    };

    const handleCancel = (): void => {
        handleEdit();
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleTitleChange} />
        <label>Author</label>
        <input className="input" value={author} onChange={handleAuthorChange} />
        <button className="button is-primary" type="submit">Update!</button>
        <button className="button is-secondary" onClick={handleCancel}>Cancel</button>
    </form>
}

export default BookEdit;