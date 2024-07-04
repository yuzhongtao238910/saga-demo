import { call, put, delay, all, takeEvery, take, fork, takeLatest } from 'redux-saga/effects';  
import axios from "axios"
const api1 = (params) => {
  return axios.get("http://localhost:9090/list", {
    params
  })
}
function* incrementAsync() {  
  // yield delay(1000); // 等待 1000 毫秒  
  yield delay(1000)
  yield put({ type: 'ADD' }); // 分发 ADD action  
}

function* minusAsync() {  
  // yield delay(2000); // 等待 1000 毫秒  
  // const data = yield call(() => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(99)
  //     }, 3000)
  //   })
  // })

  // const data1 = yield new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(919)
  //   }, 1000)
  // })
  // console.log(data1)

  // const data2 = yield call(() => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(11)
  //     }, 1000)
  //   })
  // })
  // console.log(data2)
  // const data3 = yield fetch("http://localhost:9090/list")
  // const data4 = yield data3.json()
  // console.log(data4)
  // yield put({ type: 'MINUS' }); // 分发 ADD action  
  // const data3 = yield call(fetch, "http://localhost:9090/list")
  const data3 = yield call(api1, {name: "apple"})
  // const data4 = yield data3.json()
  // const data4 = yield call([data3, data3.json])
  // console.log(data4)
  console.log(data3)
  yield put({ type: 'MINUS' }); // 分发 ADD action  
}
function* watchIncrementAsync() {  
  // yield take("INCREMENT_ASYNC", incrementAsync);  
  // yield delay(1000); // 等待 1000 毫秒  
  // yield put({ type: 'ADD' }); // 分发 ADD action  
   yield take("INCREMENT_ASYNC");  
   yield call(incrementAsync);  
}

function* watchMinusAsync() {  
  // yield takeEvery("MINUS_ASYNC", minusAsync);  
  yield takeLatest("MINUS_ASYNC", minusAsync)
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