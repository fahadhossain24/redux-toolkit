import { book_add, book_delete} from "../constants";
import { booksState } from "../initial-state/booksState";

let bookToDelete, updateBooks;


const bookSReducer = (state = booksState, action) => {
    switch (action.type) {
        case book_add:
            return {
                ...state,
                books : [...state.books, action.payload],
            }
        case book_delete:
            bookToDelete = action.payload;
            updateBooks = state.books.filter(book => book !== bookToDelete)
            return {
                ...state,
                books : updateBooks
            }
    
        default:
            return state;
    }
}

export default bookSReducer;
