import React, { memo } from 'react';

const SearchItem = ({ text, IconRight, IconLeft, fontWeight, color }) => {
    return (
        <div className=" bg-white h-[34px] py-[6px] px-4 flex items-center basis-1/5 rounded text-text text-sm cursor-pointer ">
            <span className="mr-1 text-base text-[#999] ">{IconLeft}</span>
            <span className={fontWeight ? 'text-text font-semibold leading-[34px]' : 'text-text leading-[34px]'}>
                {text}
            </span>
            <span className={color ? 'ml-auto #333' : 'ml-auto text-[#999] '}>{IconRight}</span>
        </div>
    );
};

export default memo(SearchItem);
