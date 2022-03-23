import titleReducer from "./title-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        title: {
            postsData: [
                {
                    message: 'Это главная мысль за сегодня',
                    likes: 2,
                    id: 1
                },
                {
                    message: 'Это не главная мысль за сегодня',
                    likes: 0,
                    id: 2
                }
            ],
            newPost: ""
        },
        dialogs: {
            messagesData: [
                {
                    text: 'hello'
                },
                {
                    text: 'How are you'
                },
                {
                    text: 'buy'
                },
            ],
            dialogsData: [
                {
                    id: 1,
                    name: "Lena"
                },
                {
                    id: 2,
                    name: "Max"
                }
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    dispatch(action) { // { type: 'AA-POST'}
        this._state.title = titleReducer(this._state.title, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this.rerender(store._state)
    },
    rerender () {
        console.log('state was changed')
    },


    _subscribe (callback) {
        this.rerender = callback
    }
}







window.state = store
export default store