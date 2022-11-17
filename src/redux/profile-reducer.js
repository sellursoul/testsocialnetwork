import {profileAPI} from "../api/api";

const Add_Post = 'ADD-POST';
const set_User_Profile = 'SET_USER_PROFILE';
const set_Status = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello i have registered in this social network', likesCount: 20},
        {id: 2, message: 'It`s fantastic!', likesCount: 15}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case Add_Post:
            let newPost = action.newPostText;
            return  {
                ...state,
                posts: [...state.posts, {id: 3, message: newPost, likesCount: 0}]
            }
            case set_User_Profile:
            return  {
                ...state,
                profile: action.profile
            }
            case set_Status:
            return  {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

    return state;
}

export const addPostActionCreator = (newPostText) => ({type: Add_Post, newPostText});
export const setUserProfile = (profile) => ({type: set_User_Profile, profile});
export const setStatus = (status) => ({type: set_Status, status});

export const getUserProfile = (userId) => async (dispatch) => {
   let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
   let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
}


export default profileReducer;