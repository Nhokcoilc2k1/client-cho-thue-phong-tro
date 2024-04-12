import { memo } from 'react';

const Button = ({ text, textColor, bgColor, fullWith, height, IconLeft, IconRight, onClick }) => {
    return (
        <button
            className={`py-2 px-4 ${textColor} ${bgColor} ${
                fullWith && 'w-full'
            } ${height} hover:underline h-36[px] outline-none rounded-md flex items-center justify-center font-normal cursor-pointer `}
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
