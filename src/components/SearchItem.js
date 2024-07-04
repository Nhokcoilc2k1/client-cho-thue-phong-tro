import { memo } from 'react';

const SearchItem = ({ text, IconRight, IconLeft, fontWeight, color, defaultText }) => {
    return (
        <div className="w-[100%] bg-white h-[34px] py-[6px] px-4 flex items-center rounded text-text text-sm ">
            <span className="mr-1 text-base text-icon ">{<IconLeft />}</span>
            <span
                className={`${fontWeight && 'text-text font-semibold leading-[34px] line-clamp-1'} ${
                    text ? 'font-semibold text-text' : ''
                } text-icon leading-[34px] line-clamp-1`}
            >
                {text || defaultText}
            </span>
            <span className={color ? 'ml-auto #333' : 'ml-auto text-icon '}>{<IconRight />}</span>
        </div>
    );
};

export default memo(SearchItem);
