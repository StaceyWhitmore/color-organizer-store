//this is the factory for creating stores
import { createStore, combineReducers, applyMiddleware } from 'redux'//npm install
import { colors, sort } from './reducers'//reducers.js
import stateData from '../../data/initialState'//.js
//import { v4 } from 'uuid'//npm uuid


const logger

const save

const storeFactory

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
