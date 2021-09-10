import React from 'react';
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

    return (
            <div className={style.myPosts}>
                My posts                
                <div>
                    <h3>New post</h3>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add post</button>
                    </div>
                </div>
                {postArray}
            </div>
    );
}

export default MyPosts;