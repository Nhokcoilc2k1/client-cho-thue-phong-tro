import React from 'react';
import { text } from '../../untils/contains';
import { Province } from '../../components';
import List from './List';
import { Search } from '../Public';

const HomePage = () => {
    return (
        <div className=" w-full px-4 lg:px-0 xl:px-0">
            <Search />
            <div className=" mt-3 text-text">
                <div className="flex justify-center">
                    <h1 className="text-[26px] font-semibold mb-[5px] mr-auto ml-auto ">{text.HOME_TITLE}</h1>
                </div>
                <span className="text-[#65676b] text-sm">{text.HOME_DESCRIPTION}</span>
            </div>
            <Province />
            <div className="flex w-full mt-5 gap-4">
                <div className=" w-full lg:w-2/3">
                    <List />
                </div>
                <div className="hidden border border-gray-500 lg:block lg:w-1/3">Sidebar</div>
            </div>
        </div>
    );
};

export default HomePage;
