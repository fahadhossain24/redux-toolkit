import { useDispatch, useSelector } from 'react-redux'
import { booksAddAction, booksDeleteAction } from '../../react-redux/actions/booksActions'
import { useState } from 'react'


const Books = () => {
    const [bookName, setBookName] = useState('')
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" onChange={e => setBookName(e.target.value)} placeholder='write book name'/><br/><br/>
            <button onClick={() => dispatch(booksAddAction(bookName))}>Add book</button>
            <button onClick={() => dispatch(booksDeleteAction(bookName))}>Delete book</button>
            {
                books?.map((book, index) => (
                    <ul key={index}>
                        <li>{book}</li>
                    </ul>
                ))
            }
        </div>
    )

}

export default Books