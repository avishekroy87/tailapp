import { useState, useReducer } from "react";
import { reducer } from './reduceData';

const booksData = [
    { id: 1, name: "abc" },
    { id: 2, name: "abc2" },
    { id: 3, name: "abc3" }
];

const Modal = ({ modalText }) => {
    return <>{modalText}</>
}

const BookList = () => {

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ""
    })
    const [newBook, setNewBook] = useState("");

    const saveData = (event) => {
        event.preventDefault();
        const bookentry = { id: new Date().getDay.toString(), name: newBook }
        dispatch({ type: "ADD", payload: bookentry })
        setNewBook("");
        
    }
    return <>

        <form style={{ border: "1px" }} onSubmit={saveData}>
            <input type="text" value={newBook} onChange={(e) => { setNewBook(e.target.value) }} />
            <button type="submit">Add</button>
        </form>
        {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
        {bookState.books.map((book) => {
            const { id, name } = book;
            return <li key={id}>
                {name}
            </li>

        })}
    </>
}
export default BookList