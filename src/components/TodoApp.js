import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo as addTodoActionCreator,
    removeTodo as removeTodoActionCreator,
    removeAll as removeAllActionCreator
} from "../redux/slices/todoSlice";
import {
    fetchTodosRequested as fetchTodosRequestedActionCreator,
} from "../redux/actions/fetchTodosAction";

function TodoApp(props) {
    //const { todoItems, addTodo, removeTodo, removeAll, triggerAsyncFunction, fetchTodo, } = props;

    const todoItems = useSelector((state) => ([
        ...state.todo,
        ...state.fetchTodos.data,
    ]));
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState('');
    
    return (
        <div>
            <h3>오늘 할 일</h3>
            <ul>
                {todoItems.map((todoItem, index) => {
                    return (
                        <li key={index}>{todoItem}</li>
                    );
                })}
            </ul>

            <div>
                <input
                    value={newTodo}
                    onChange={(event) => { 
                        setNewTodo(event.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        //addTodo(newTodo);
                        dispatch(addTodoActionCreator(newTodo));
                        setNewTodo('');
                    }}
                >
                    할 일 추가
                </button>
                <button
                    onClick={() => {
                        dispatch(removeTodoActionCreator());
                    }}
                >
                    할 일 삭제
                </button>
                <button
                    onClick={() => {
                        dispatch(removeAllActionCreator());
                    }}
                >
                    모두 삭제
                </button>    
            </div>
            <button
                    onClick={() => {
                        dispatch((dispatch, getState) => {
                            console.log('비동기 함수 실행', getState());

                            new Promise((resolve, reject) => {
                                setTimeout(resolve, 3000);
                            }).then(() => {
                                console.log('비동기 함수 성공', getState());
                            }).finally(() => {
                                console.log('비동기 함수 종료', getState());
                            });
                        });
                    }}>
                    비동기 함수 테스트
                </button>

                <button onClick={() => {
                    dispatch(fetchTodosRequestedActionCreator());
                }}>
                    서버에서 할 일 목록 가져오기
                </button>
        </div>
    )
}

export default TodoApp;