//A list of action creators (that create action objects)
import C from './constants'//'AC' for Action Constants
import { v4 } from 'uuid'//npm uuid

export const removeColor = id =>
({
  //type: "REMOVE_COLOR"
  type: C.REMOVE_COLOR,
  id //passed in on invocation
})

export const addColor = (title, color)=>
({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
})

export const rateColor = (id, rating) =>
({
  type: C.RATE_COLOR,
  id,
  rating
})

export const sortColors = sortedBy =>
(sortedBy === "rating") ?
  ({
    type: C.SORT_COLORS,
    sortBy: "SORTED_BY_RATING"
  }) :
  (sortedBy === "title") ?
    ({
      type: C.SORT_COLORS,
      sortBy: "SORTED_BY_TITLE"
    }) :
    ({
      type: C.SORT_COLORS,
      sortBy: "SORTED_BY_DATE"
    })




//store.dispatch( removeColor("id-of-color-would-will-here"))
