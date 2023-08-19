import React from 'react';
import './Saved.css'

const Saved = () => {
    return (
        <div>
            <div className='w-full h-20 pt-5 mt-8 read-total-time'>
                <h1 className='text-center text-2xl font-bold'>Spent time on read : 177 min</h1>
            </div>
            <div className='bookmark w-full pt-5 mt-6'>
                <h1 className='bookmark-headline mt-8 ml-8 text-2xl font-bold pb-6'>Bookmarked Blogs : 8</h1>
            </div>
        </div>
    );
};

export default Saved;