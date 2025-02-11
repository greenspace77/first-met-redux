import { put, delay, takeEvery } from 'redux-saga/effects';
import { fetchTodosRequested,
    fetchTodosSucceeded,
    fetchTodosFailed,
 } from '../actions/fetchTodosAction';

 function* fetchTodos() {
    try {
        const data = yield delay(
            3000,
            [
                '서버로부터 받아온 할 일 1',
                '서버로부터 받아온 할 일 2',
                '서버로부터 받아온 할 일 3',
            ]
        );

        yield put(fetchTodosSucceeded(data));
    }
    catch (error) {
        yield put(fetchTodosFailed(error));
    }
 }

 function* fetchTodosSaga() {
    yield takeEvery(fetchTodosRequested, fetchTodos);
 }

 export default fetchTodosSaga;