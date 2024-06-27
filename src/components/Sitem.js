import React from 'react';

const Sitem = ({ title, price, image, createdAt }) => {
    return (
        <a href="/" className="flex py-2.5 border-b border-borderContent">
            <img
                src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/06/25/z5566986714297-06631b33e54ff879d30f442f7a2a3ce8_1719252458.jpg"
                alt="ảnh"
                className="w-[65px] h-[65px] rounded object-cover"
            />
            <div className="ml-4">
                <h4 className="uppercase text-sm text-textSitem mb-2.5">{`${title.slice(0, 45)}...`}</h4>
                <div className="flex justify-between">
                    <span className="text-priceText text-sm font-semibold">{price}</span>
                    <span className="text-sm text-textTime">{createdAt}</span>
                </div>
            </div>
        </a>
    );
};

export default Sitem;
