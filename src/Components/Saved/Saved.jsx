import React from 'react';
import './Saved.css'
import Bookmark from '../Bookmark/Bookmark';

const Saved = (props) => {
    const headlines = props.headlines;
    return (
        <div className=''>
            <div className='w-full h-20 pt-5 mt-8 read-total-time'>
                <h1 className='text-center text-2xl font-bold'>Spent time on read : {props.totalTime} min</h1>
            </div>
            <div className='bookmark w-full pt-5 mt-6'>
                <h1 className='bookmark-headline mt-8 ml-8 text-2xl font-bold pb-6'>Bookmarked Blogs : {headlines.length}</h1>
                <div className='p-3'>
                    {
                        headlines.map(headline=><Bookmark
                        headline ={headline}
                        ></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Saved;