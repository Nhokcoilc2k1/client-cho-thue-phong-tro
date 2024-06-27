import { memo } from 'react';

const Button = ({ text, className, IconLeft, IconRight, onClick }) => {
    return (
        <button
            className={` ${className} outline-none rounded-md flex items-center justify-center cursor-pointer `}
            onClick={onClick}
        >
            {IconLeft && (
                <span className="mr-[4px] relative -mt-[1px] text-lg">
                    <IconLeft />
                </span>
            )}
            <span className="text-sm ">{text}</span>
            {IconRight && (
                <span className="ml-[4px] relative -mt-[1px] text-lg">
                    <IconRight />
                </span>
            )}
        </button>
    );
};

export default memo(Button);
