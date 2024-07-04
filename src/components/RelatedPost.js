import React from 'react';
import Sitem from './Sitem';
import { dataNewPost } from '../assets/data/data';

const RelatedPost = () => {
    return (
        <div className="p-5 mb-5 bg-white rounded-lg border border-borderContent">
            <h4 className="text-text text-lg font-semibold mb-3">Tin mới đăng</h4>
            {dataNewPost.map((item) => (
                <Sitem key={item.id} title={item.title} price={item.price} createdAt={item.createdAt} />
            ))}
        </div>
    );
};

export default RelatedPost;
