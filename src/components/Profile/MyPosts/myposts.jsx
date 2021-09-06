import React from 'react';
import style from  './myposts.module.css';
import Post from './Post/Post';

 

const MyPosts = (props) => {
        

    let postArray = props.postsData.map(post => <Post header={post.header} text={post.text} likeCounts = {post.likeCounts}/>);

    let newPostElement=React.createRef();       //Создаем ссылку на элемент

    let addPost = () =>
    {
        let text = newPostElement.current.value; //newPostElement.current - ссылается на свойства реального dom элемента
        alert(text);
    }

    return (
            <div className={style.myPosts}>
                My posts                
                <div>
                    <h3>New post</h3>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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