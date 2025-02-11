export const ACTION_TYPE_ADD_TODO = 'ACTION_TYPE_ADD_TODO';
export const ACTION_TYPE_REMOVE_TODO = 'ACTION_TYPE_REMOVE_TODO';
export const ACTION_TYPE_REMOVE_ALL = 'ACTION_TYPE_REMOVE_ALL';

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