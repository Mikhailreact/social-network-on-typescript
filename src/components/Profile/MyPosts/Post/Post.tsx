import React from "react";
import s from './Post.module.css'


export const Post = () => {
    return (
        <div className={s.item}>
            Post 1
            <img src={"https://www.ejin.ru/wp-content/uploads/2018/10/kartinki_volka_na_avu_04.jpg"}/>

            <div>
                <span>Like</span>
            </div>
        </div>
    )
}


/*const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Posts massage={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef(); //Через рефы обращаемся к value

window.state = state;

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </div>

    )
}

export default MyPosts;*/
