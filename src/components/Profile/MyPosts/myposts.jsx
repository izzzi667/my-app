import style from  './myposts.module.css';
import Post from './Post/Post';

 

const MyPosts = (props) => {
        

    let postArray = props.postsData.map(post => <Post header={post.header} text={post.text} likeCounts = {post.likeCounts}/>);

    return (
            <div className={style.myPosts}>
                My posts                
                <div>
                    <h3>New post</h3>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                {postArray}
            </div>
    );
}

export default MyPosts;