import React from 'react';
import { Field, reduxForm } from "redux-form";
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import style from  './myposts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {        
    let postArray = props.posts.map(post => <Post header={post.header} text={post.text} likeCounts = {post.likeCounts} key={post.id}/>);

    let newPostElement=React.createRef();       //Создаем ссылку на элемент

    let addPost = () =>
    {        
        props.createNewPost();
    }

    let onPostChange =() =>
    {
        let text =newPostElement.current.value;
        props.updateNewPost(text);
    }
    let addNewPostMessages  =(values) =>
    {
        props.createNewPost(values.newPostBody)
    }

    return (
            <div className={style.myPosts}>
                My posts                
                <div>
                    <h3>New post</h3>
                    <NewPostsReduxForm onSubmit = {addNewPostMessages} />
                </div>
                {postArray}
            </div>
    );
}



const NewPostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
            <Field component ='textarea' name ='newPostBody' placeholder='Your post text' />
            <div><button>Add post</button></div>
        </form>
}

const NewPostsReduxForm = reduxForm({form: 'newPostForm'})(NewPostForm);
export default MyPosts;