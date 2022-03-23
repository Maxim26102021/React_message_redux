const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
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
};



export const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        message: text
    }
}

export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        letter: text
    }
}

const titleReducer = (state = initialState, action) => {
    if(action.type === ADD_POST) {
        state.postsData.push(
            {
                message: action.message,
                likes: 0,
                id:3
            }
        )
    } else if(action.type === UPDATE_NEW_POST) {
        state.newPost = action.letter;
    }

    return state;
}

export default titleReducer