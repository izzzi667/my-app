import {profileApi} from '../api/api'

const ADD_POST ='ADD-POST'; //Acrtion type - для уменьшения ошибк в написании Action Creator, просто не даст скомпилироваться при ошибке
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET_USER_PROFILE';

let initialState={
    postsData: [
        {id:0, header:'Привет', text:'Текст поста 1-2-3', likeCounts:5},
        {id:1, header:'Привет 2', text:'Текст поста 1-2-3-4', likeCounts:3},
        {id:2, header:'Привет 3', text:'ААА Текст поста 1-2-3-4', likeCounts:3}
    ]
    ,newPostText: ''
    ,profile: null
};

//Test commit integration 7

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST: {           
                //Необходимо - react redux проверяет при перисовке, что меняется ссылка на объект, а не конекст
            return {...state, 
                    postsData: [...state.postsData,{id: 5, header: 'NewPost', text: state.newPostText, likeCounts:0 }],
                    newPostText: ''
                };

            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postMessage}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,postMessage: text });
export const setUserProfileIOnSuccess = (profile)=>({type:SET_USER_PROFILE, profile});


export const setUserProfile =(userId) =>{
    return(dispatch) =>
    {
        debugger;
        profileApi.getProfile(userId).then(response =>{
            debugger;
            dispatch(setUserProfileIOnSuccess(response.data));
        }); 
    }    
}

export default profileReducer;