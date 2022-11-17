const Send_Message = 'Send_Message';

let initialState = {
    dialogs: [
        {name: 'Illia', id: 1},
        {name: 'Sofia', id: 2},
        {name: 'Luda', id: 3},
        {name: 'Albert', id: 4},
        {name: 'Sam', id: 5}
    ],
    messages: [
        {message: 'Hi', id: 1},
        {message: 'How are you?', id: 2},
        {message: 'How is your day?', id: 3},
        {message: 'Good.', id: 4},
        {message: 'I am glad to see you today!', id: 5}
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case Send_Message:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const SendMessageCreator = (newMessageBody) => ({type: Send_Message, newMessageBody})

export default dialogsReducer;