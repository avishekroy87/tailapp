export const reducer = (state, action) => {
    if (action.type === "ADD") {
        const booksData = [...state.books, action.payload]
        return {
            ...state,
            books: booksData,
            isModalOpen: true,
            modalText: "Book is added"
        }
    }

}