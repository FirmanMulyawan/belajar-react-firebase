import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "../reducer"

// state global digunakan dimana saja
export const store = createStore(reducer, applyMiddleware(thunk))
// export const store = createStore(reducer)
