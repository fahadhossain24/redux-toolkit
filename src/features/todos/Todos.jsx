import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todoSlice';

const Todos = () => {
    const [todoName, setTodoName] = useState('')
    const {todos} = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" onChange={e => setTodoName(e.target.value)} placeholder='Todo Name' /><br />
            <button onClick={() => dispatch(addTodo(todoName))}>Add Todo</button>
            {
                todos?.map((todo, index) => <div key={index}>
                    <p>{todo}</p>
                </div>)
            }
        </div>
    );
};

export default Todos;