import React from 'react';
import { localtion } from '../../src/untils/contains';
import { ProvinceBtn } from '../components';

const Province = () => {
    return (
        <div className="px-3 sm:px-0">
            <p className="text-center text-lg font-semibold text-text">Khu vực nổi bật</p>
            <div className="flex gap-5 justify-center mt-3 ">
                {localtion.map((el) => {
                    return <ProvinceBtn key={el.id} name={el.name} image={el.image} />;
                })}
            </div>
        </div>
    );
};

export default Province;
