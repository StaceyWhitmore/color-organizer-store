//the reducer functions for updating specific parts of the state tree
//..to eventually be combined into one reducer.
//Remember reducers have NO SIDE EFFECTS
import C from '../constants'//'AC' for Action Constants

//{}
export const color = ({state={}, action}) => {
  switch(action.type) {
    case C.ADD_COLOR :
      return {

      }
      case C.RATE_COLOR :
        return (state.id !== action.id) ?
          state : {
            ...state,
            rating: action.rating
          }
      default :
        return state
  }//close switch
}//close color() reducer

//[]
export const colors= ({state=[], action}) => {
  switch (action.type) {
    case C.ADD_COLOR :
      return [
        ...state,
        color({}, action)
      ]
    case C.RATE_COLOR :
      return state.map(
        c => color(c, action)
      )
    case C.REMOVE_COLOR :
      return state.filter(
        c => c.id !== action.id
      )
    default :
      return state
  }//close switch
}//close colors() reducer

// ""
export const sort = ({state="SORTED_BY_TITLE", action}) => {
  switch (action.type) {
    case C.SORT_COLORS :
      return action.sortBy
    default :
      return state
  }//close switch
  return ""
}
