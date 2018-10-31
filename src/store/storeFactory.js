//this is the factory for creating stores
import { createStore, combineReducers, applyMiddleware } from 'redux'//npm install
import { colors, sort } from './reducers'//reducers.js
import stateData from '../../data/initialState'//.js
//import { v4 } from 'uuid'//npm uuid


//some middleware for logging dispatched actions to the console
const logger = store => next => action => {
  let result
  console.groupCollapsed("dispatching", action.type)//([optional label])
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}//close logger()

//a piece of middleware for saving state to local storage
const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-store'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initialState=stateData) =>
  //apply two middleware pieces created above: logger & saver
  applyMiddleware(logger, saver)(createStore)(
    combineReducers({colors, sort}),
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      initialState
  )

export default storeFactory



//saving to local localStorage
/*
const store = createStore(
  combineReducers({colors, sort}),
  (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
      {}
)

store.subsribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
})

console.log('current color count is ', store,getState().colors.length)
console.log('current state', store.getState())

store.dispatch({
    type: "ADD_COLOR",
    id: uuid.v4(),
    title: "Love Pink",
    color: "#f142ff",
    timestamp: new Date().toString()
})
*/
