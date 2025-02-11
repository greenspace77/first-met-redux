const ACTION_TYPE_ADD_TODO = "my-app/todo/ACTION_TYPE_ADD_TODO";
const ACTION_TYPE_REMOVE_TODO = "my-app/todo/ACTION_TYPE_REMOVE_TODO";
const ACTION_TYPE_REMOVE_ALL = "my-app/todo/ACTION_TYPE_REMOVE_ALL";

const initialState = [];

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE_ADD_TODO:
            return [...state, action.text];
        case ACTION_TYPE_REMOVE_TODO:
            return state.slice(0, -1);
        case ACTION_TYPE_REMOVE_ALL:
            return [];
        default:
            return state;
    }
}

export function addTodoActionCreator(text) {
    return {
        type: ACTION_TYPE_ADD_TODO,
        text: text
    }
}

export function removeTodoActionCreator() {
    return {
        type: ACTION_TYPE_REMOVE_TODO,
    }
}

export function removeAllActionCreator() {
    return {
        type: ACTION_TYPE_REMOVE_ALL,
    }
}