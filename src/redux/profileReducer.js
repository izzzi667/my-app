const ADD_POST ='ADD-POST'; //Acrtion type - для уменьшения ошибк в написании Action Creator, просто не даст скомпилироваться при ошибке
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) =>{
    switch (action.type) {
        case ADD_POST:
            let newPost = 
            {
                id:5,
                header: 'Newpost',
                text: state.newPostText,
                likeCounts: 0
            };
            state.postsData.push(newPost);   
            state.newPostText= '';
            break;
            
        case UPDATE_NEW_POST_TEXT:
            state.newPostText= action.postMessage;
            break;
    
        default:
            break;
    }
    return state;
}

export default profileReducer;