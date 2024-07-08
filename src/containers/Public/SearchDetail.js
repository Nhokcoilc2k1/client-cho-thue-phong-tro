import React from 'react';
import { Pagination } from '../Public';
import { ItemSidebar, RelatedPost } from '../../components';
import List from './List';
import { useSearchParams } from 'react-router-dom';

const SearchDetail = () => {
    const [params] = useSearchParams();

    return (
        <div className=" w-full sm:px-4 lg:px-0 xl:px-0">
            <div>
                <div className="flex w-full mt-5 gap-4">
                    <div className=" w-full lg:w-2/3">
                        <List />
                        <Pagination pageNumber={params.get('page')} totalCount={98} />
                    </div>
                    <div className="hidden lg:block lg:w-1/3">
                        <ItemSidebar isDouble title="Xem theo giá" />
                        <ItemSidebar isDouble title="Xem theo diện tích" />
                        <RelatedPost />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchDetail;
