import React, { memo } from 'react';

const SearchItem = ({ text, IconRight, IconLeft, fontWeight, color }) => {
    return (
        <div className="w-[100%] bg-white h-[34px] py-[6px] px-4 flex items-center md:basis-1/5 rounded text-text text-sm cursor-pointer ">
            <span className="mr-1 text-base text-icon ">{IconLeft}</span>
            <span
                className={
                    fontWeight
                        ? 'text-text font-semibold leading-[34px] line-clamp-1'
                        : 'text-icon leading-[34px] line-clamp-1'
                }
            >
                {text}
            </span>
            <span className={color ? 'ml-auto #333' : 'ml-auto text-icon '}>{IconRight}</span>
        </div>
    );
};

export default memo(SearchItem);
