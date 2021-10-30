import React, { PureComponent } from 'react';
import { Field, reduxForm } from "redux-form";
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';
import { requiredField , maxLenghtCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsCrontorls/FormsControls';
import style from  './myposts.module.css';
import Post from './Post/Post';


const maxLen10 = maxLenghtCreator(10);

class MyPosts extends PureComponent {     
    
    //Аналогично импорту PureComponent, для функциональных использовать React.Memo
    
    /*
    shouldComponentUpdate(nextProps, nextState)
    {
        //Определяет, нужно ли перерисовывать комопненту
        return nextProps!=this.props || nextState!=this.state;
    }*/

    render(){
    let postArray = this.props.posts.map(post => <Post header={post.header} text={post.text} likeCounts = {post.likeCounts} key={post.id}/>);

    let newPostElement=React.createRef();       //Создаем ссылку на элемент

    let addPost = () =>
    {        
        this.props.createNewPost();
    }

    let onPostChange =() =>
    {
        let text =newPostElement.current.value;
        this.props.updateNewPost(text);
    }
    let addNewPostMessages  =(values) =>
    {
        this.props.createNewPost(values.newPostBody)
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
}


//Вызов стандартного компонента redux-form
//            <Field component ='textarea' name ='newPostBody' placeholder='Your post text' validate={[requiredField, maxLen10]}/>           

const NewPostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
            <Field component ={Textarea} name ='newPostBody' placeholder='Your post text' validate={[requiredField, maxLen10]}/>           
            <div><button>Add post</button></div>
        </form>
}


const NewPostsReduxForm = reduxForm({form: 'newPostForm'})(NewPostForm);
export default MyPosts;