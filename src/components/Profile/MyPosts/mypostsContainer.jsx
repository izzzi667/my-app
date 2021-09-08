import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myposts';





const MyPostsContainer = (props) => {
    //Контейнерная компонента может "знать о внешнем мире", использовать методы redux и содержит "чистые" презентационные компоненты    

    let state = props.store.getState();


    let addPost = () =>
    {        
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(onPostChangeActionCreator(''));
    }

    let onPostChange =(text) =>
    {
        props.store.dispatch(onPostChangeActionCreator(text));
    }

    return (
        <MyPosts updateNewPost={onPostChange} createNewPost={addPost} posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;