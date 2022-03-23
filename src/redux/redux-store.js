import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import titleReducer from "./title-reducer";



let reducersBatch = combineReducers({
    title: titleReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer
}) //like state

console.log(reducersBatch)

let store = createStore(reducersBatch)


export default store


window.gol = store