import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myposts';



    //Контейнерная компонента может "знать о внешнем мире", использовать методы redux и содержит "чистые" презентационные компоненты    


let mapStateToProps = (state) =>
{    
    return  {        
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispathcToProps = (dispatch) =>
{
    return {
        updateNewPost: (text)=>{
            dispatch(onPostChangeActionCreator(text));
        },
        createNewPost: ()=>{            
            dispatch(addPostActionCreator());
            dispatch(onPostChangeActionCreator(''));
        }
    }   
}

const MyPostsContainer = connect(mapStateToProps, mapDispathcToProps)(MyPosts);


export default MyPostsContainer;