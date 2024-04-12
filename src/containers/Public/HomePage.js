import React from 'react';
import { Search } from './index';
import { text } from '../../untils/contains';

const HomePage = () => {
    return (
        <div className="w-full">
            <Search />
            <div className="mt-3 text-text">
                <div className="flex justify-center">
                    <h1 className="text-[26px] font-semibold mb-[5px] mr-auto ml-auto ">
                        {text.HOME_TITLE}
                    </h1>
                </div>
                <p className="text-[#65676b] text-sm">{text.HOME_DESCRIPTION}</p>
            </div>
        </div>
    );
};

export default HomePage;
