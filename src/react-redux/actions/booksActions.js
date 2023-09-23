import {book_add, book_delete} from '../constants';

export const booksAddAction = (value) => {
    return {
        type: book_add,
        payload: value
    }
}

export const booksDeleteAction = (id) => {
    return {
        type: book_delete,
        payload: id
    }
}