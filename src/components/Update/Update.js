import React from 'react';
import './style.css';

const Update = ({title, post}) => {
    return (
        <div className="update">
            <div className="title">{title}</div>
            <div className="post">{post}</div>
        </div> 
       );
}

export default Update;