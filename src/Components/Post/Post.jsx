import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import './Post.css'

const Post = (props) => {
    const { id, name, userImg, post, release, readTime, hasTags, postImg } = props.poster;
    const time = props.time;
    const poster = props.poster;
    const handleHeadLine = props.handleHeadLine;
    // console.log(handleHeadLine);
    return (
        <div className='post-container mt-8'>
            <img className='post-img' src={postImg} alt="" />
            <div>
                <div className='user-div'>
                    <img className='user-img' src={userImg} alt="" />
                    <div>
                        <h1>{name}</h1>
                        <p>{release}</p>
                    </div>
                    <p className='read-time'>{readTime} min read <button onClick={()=>handleHeadLine(poster)}><FontAwesomeIcon icon={faBookBookmark} /></button></p>
                    
                </div>
                <h1 className='post-headline'>{post}</h1>
                <p>{hasTags}</p>
                <button onClick={()=>time(readTime)} className='mark-read'>Mark as read</button>
            </div>
        </div>
    );
};

export default Post;