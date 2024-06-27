import React from 'react';
import { text } from '../../untils/contains';
import { ItemSidebar, Province, RelatedPost } from '../../components';
import List from './List';
import { Pagination, Search } from '../Public';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
    const [params] = useSearchParams();
    console.log(params.get('page'));
    return (
        <div className=" w-full sm:px-4 lg:px-0 xl:px-0">
            <Search />
            <div>
                <div className="mt-3 px-3 sm:px-0 text-text">
                    <div className="flex justify-center">
                        <h1 className="text-[26px] font-semibold mb-[5px] mr-auto ml-auto ">{text.HOME_TITLE}</h1>
                    </div>
                    <span className="text-[#65676b]  text-sm">{text.HOME_DESCRIPTION}</span>
                </div>
                <Province />
                <div className="flex w-full mt-5 gap-4">
                    <div className=" w-full lg:w-2/3">
                        <List />
                        <Pagination pageNumber={params.get('page')} totalCount={98} />
                    </div>
                    <div className="hidden lg:block lg:w-1/3">
                        <ItemSidebar isDouble title="Xem theo giá" />
                        <ItemSidebar isDouble title="Xem theo diện tích" />
                        <ItemSidebar title="Danh mục cho thuê" />
                        <RelatedPost />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
