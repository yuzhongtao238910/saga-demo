import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas'
const sagaMiddleware=createSagaMiddleware();
const initState = {
	name: "apple",
	num: 1
}
const reducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD":
			return {
				...state,
				num: state.num + 1
			}
		case "MINUS":
			return {
				...state,
				num: state.num - 1
			}
		default:
			return state
	}
}
export const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
