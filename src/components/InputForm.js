import React, { memo } from 'react';

function InputForm({ label, value, setValue, type, inValidFields, setInValidFields }) {
    return (
        <div className="mb-5">
            <label className=" block mb-1.5 text-xs font-light text-text ">{label}</label>
            <input
                type="text"
                className="outline-none bg-[#e8f0fe] h-[45px] w-full px-5 rounded"
                value={value}
                onChange={(e) => setValue((prev) => ({ ...prev, [type]: e.target.value }))}
                onFocus={() => {
                    let clearInvalid = inValidFields?.filter((el) => el.name !== type);
                    setInValidFields(clearInvalid);
                }}
            />
            {inValidFields?.length > 0 && inValidFields.some((el) => el.name === type) && (
                <small className="text-red-500 italic">
                    {inValidFields.find((el) => el.name === type)?.massage}
                </small>
            )}
        </div>
    );
}

export default memo(InputForm);
