Color Organizer in Redux Demo
=============================
Redux is based on the Flux design pattern to simplify how data changes flow through a
an app. It has middleware for acting on a store's dispatch pipeline via a series of functions
executed in series.

#### Demo
-------------
Try interacting with the store from the console window, by dispatching an action
such as one of the following:

```javascript

    // Display's the store's current state
    store.getState()

    // Sort colors by date, title or rating
    store.dispatch(
      sortColors("title")//sort by title
    )

    // Dispatch an ADD_COLOR action
    store.dispatch(
      addColor("Boho Blue", "#1121ff")
    )

    // Rate an existing color (ids show up in state)
    store.dispatch(
      rateColor("color-id-to-rate", 5)//rating is an int from 1 to 5
    )

    // Dispatch a REMOVE_COLOR action
    store.dispatch(
      removeColor("id-of-color-to-remove")
    )



```
