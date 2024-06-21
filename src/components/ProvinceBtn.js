import React from 'react';

const ProvinceBtn = ({ name, image }) => {
    return (
        <div className="bg-white rounded-lg text-primary2 shadow-hv1 hover:shadow-hv2 hover:text-hv cursor-pointer">
            <img src={image} alt="HCM" className="w-[220px] h-[110px] object-cover rounded-tl-lg rounded-tr-lg" />
            <p className="py-2 text-center text-sm font-semibold rounded-bl-lg rounded-br-lg ">{name}</p>
        </div>
    );
};

export default ProvinceBtn;
