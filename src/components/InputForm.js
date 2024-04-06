import React, { memo } from 'react';

function InputForm({ label }) {
    return (
        <div className="mb-5">
            <label
                htmlfor="phone"
                className=" block mb-1.5 text-xs font-light text-text "
            >
                {label}
            </label>
            <input
                type="text"
                id="phone"
                className="outline-none bg-[#e8f0fe] h-[45px] w-full px-5 rounded"
            />
        </div>
    );
}

export default memo(InputForm);
