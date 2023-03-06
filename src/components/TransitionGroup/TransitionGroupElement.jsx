import React, {useState} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const array = [
    {id: 1, text: 'Show video'},
    {id: 2, text: 'Create video'},
    {id: 3, text: 'Delete video'},
]

const TransitionGroupElement = () => {
    const [text, setText] = useState('')
    const [todoList, setTodoList] = useState(array)

    const addTodoList = () => {
        setTodoList([...todoList, {id: Date.now(), text}]);
        setText('')
    }

    return (
        <div className="transition-group-wrapper">
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="create-txt"
                    onClick={addTodoList}
                >Create text</button>
            </div>
            <TransitionGroup
                component='ul'
            >
                    {
                        todoList.map(({id, text}) => (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames="todo"
                            >
                                <li
                                    className="list-item"
                                    onClick={() => setTodoList([...todoList.filter(todo => todo.id !==id)])}
                                >
                                    {id} {text}
                                </li>
                            </CSSTransition>
                        ))
                    }
            </TransitionGroup>
        </div>
    );
};

export default TransitionGroupElement;