import { call, put, delay, all, takeEvery, take, fork } from 'redux-saga/effects';  
function* incrementAsync() {  
  yield delay(1000); // 等待 1000 毫秒  
  yield put({ type: 'ADD' }); // 分发 ADD action  
}

function* minusAsync() {  
  yield delay(2000); // 等待 1000 毫秒  
  yield put({ type: 'MINUS' }); // 分发 ADD action  
}
function* watchIncrementAsync() {  
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);  
  // yield delay(1000); // 等待 1000 毫秒  
  // yield put({ type: 'ADD' }); // 分发 ADD action  
}

function* watchMinusAsync() {  
  yield takeEvery("MINUS_ASYNC", minusAsync);  
  // yield delay(1000); // 等待 1000 毫秒  
  // yield put({ type: 'ADD' }); // 分发 ADD action  
}
export function * rootSaga() {
  console.log('Hello Sagas!');
  // yield all([  
  //   watchIncrementAsync(),  
  //   // 你可以在这里添加更多的 watcher Saga  
  // ]);  

  yield all([fork(watchIncrementAsync), fork(watchMinusAsync)])
  // yield all([watchIncrementAsync(), watchMinusAsync()])
  // yield 
}