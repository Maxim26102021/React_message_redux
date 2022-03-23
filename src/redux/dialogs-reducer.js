const MESSAGE_WAS_SEND = "MESSAGE-WAS-SEND";
const UPDATE_MESSAGE = "UPDATE-MESSAGE-BODY";

let initialState = {
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
    };

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_MESSAGE,
        body: text
    }
}

export const messageWasSendCreator = (text) => {
    return {
        type: MESSAGE_WAS_SEND,
        body: text
    }
}

const dialogsReducer = (state = initialState, action) => {
    if(action.type === UPDATE_MESSAGE) {
        state.newMessageBody = action.body;
    } else if (action.type === MESSAGE_WAS_SEND) {
        state.messagesData.push({
            text: action.body
        })
        state.newMessageBody = ''
    }

    return state;
}

export default dialogsReducer