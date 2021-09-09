const ADD_POST ='ADD-POST'; //Acrtion type - для уменьшения ошибк в написании Action Creator, просто не даст скомпилироваться при ошибке
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

let initialState={
    postsData: [
        {id:0, header:'Привет', text:'Текст поста 1-2-3', likeCounts:5},
        {id:1, header:'Привет 2', text:'Текст поста 1-2-3-4', likeCounts:3},
        {id:2, header:'Привет 3', text:'ААА Текст поста 1-2-3-4', likeCounts:3}
    ]
    ,newPostText: 'dasd'
};



const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST: {           
                //Необходимо - react redux проверяет при перисовке, что меняется ссылка на объект, а не конектс
                let newPost = 
                {
                    id:5,
                    header: 'Newpost',
                    text: state.newPostText,
                    likeCounts: 0
                };
                let stateCopy ={...state};
                stateCopy.postsData=[...state.postsData];
                stateCopy.postsData.push(newPost);   
                stateCopy.newPostText= '';
                return stateCopy;
                break;
            }
        case UPDATE_NEW_POST_TEXT:
            {
                let stateCopy = {...state};
                stateCopy.newPostText= action.postMessage;
                return stateCopy;
                break;
            }
        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT,postMessage: text });

export default profileReducer;