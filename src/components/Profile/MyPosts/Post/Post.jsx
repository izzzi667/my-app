import style from  './Post.module.css';
 

const Post = (props) => {
    return (            
        
        <div className={style.item}>
            <img src="https://via.placeholder.com/400x400" />
            <h4>{props.header}</h4>
            <div>{props.text}</div>
            <div><span>like ({props.likeCounts})</span></div>
            <hr />
        </div>           
        
    );
}

export default Post;