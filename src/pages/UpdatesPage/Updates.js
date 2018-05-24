import React from 'react';
import Update from '../../components/Update';
import './style.css';

const Updates = () => {
    const updateData = [
        {
            title: 'first post',
            post: 'this is my first post'
        },
        {
            title: 'second post',
            post: 'this is my second post'
        },
        {
            title: 'third post',
            post: 'this is my third post'
        },
        {
            title: 'fourth post',
            post: 'this is my fourth post'
        }
    ];
    const updates = updateData.map((update) => {
        return (
            <Update
            key={update.post}
            title={update.title}
            post={update.post}
             />
        );
    });
    return (
        <div className="updates-container">
        {updates}
        </div>
    );
};

export default Updates;