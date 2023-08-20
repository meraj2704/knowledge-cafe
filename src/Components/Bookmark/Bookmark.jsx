import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    const headline =props.headline
    return (
        <div>
            <div
            className='bookmark-div w-full p-3 mt-4'>
                <h1 className='text-lg font-semibold'>{headline.post}</h1>
            </div>
        </div>
    );
};

export default Bookmark;