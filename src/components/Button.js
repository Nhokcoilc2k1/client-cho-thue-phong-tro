import { memo } from 'react';

const Button = ({
    text,
    textColor,
    bgColor,
    fullWith,
    height,
    IconLeft,
    IconRight,
    onClick,
}) => {
    return (
        <button
            className={`py-2 px-4 ${textColor} ${bgColor} ${
                fullWith && 'w-full'
            } ${height} hover:underline  outline-none rounded-md flex items-center justify-center leading-5 text-sm font-normal cursor-pointer `}
            onClick={onClick}
        >
            {IconLeft && (
                <span className="mr-[4px] text-lg">
                    <IconLeft />
                </span>
            )}
            {text}
            {IconRight && (
                <span className="ml-[4px] text-lg">
                    <IconRight />
                </span>
            )}
        </button>
    );
};

export default memo(Button);
