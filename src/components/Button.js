import { memo } from 'react';

const Button = ({ text, className, IconLeft, IconRight, onClick }) => {
    return (
        <button
            className={` ${className} outline-none rounded-md flex items-center justify-center cursor-pointer `}
            onClick={onClick}
        >
            {IconLeft && (
                <span className="mr-[4px] text-lg">
                    <IconLeft />
                </span>
            )}
            <span className="text-sm relative -mb-[2px]">{text}</span>
            {IconRight && (
                <span className="ml-[4px] text-lg">
                    <IconRight />
                </span>
            )}
        </button>
    );
};

export default memo(Button);
