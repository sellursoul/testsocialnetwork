import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello i have registered in this social network', likesCount: 20},
                {id: 2, message: 'It`s fantastic!', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        sideBar: { }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

window.state = store;
export default store;