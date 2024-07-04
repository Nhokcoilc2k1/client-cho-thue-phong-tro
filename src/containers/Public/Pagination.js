import React, { useState } from 'react';
import icons from '../../untils/icons';
import { PageNumber } from '../../components';
import usePagination from '../../hooks/usePagination';
const { FaAnglesLeft, FaAnglesRight } = icons;

const Pagination = ({ totalCount, pageNumber }) => {
    const [currentPage, setCurrentPage] = useState(+pageNumber);

    const pagination = usePagination(totalCount, currentPage);
    const maxPage = Math.ceil(totalCount / process.env.REACT_APP_LIMIT_PRODUCT);

    return (
        <div className="flex text-sm gap-1.5 justify-center">
            <PageNumber
                text="Trang trước"
                page={Math.max(+pageNumber - 1, 1)}
                setCurrentPage={setCurrentPage}
                iconLeft={<FaAnglesLeft color="#333" size="9" />}
                className="hidden sm:flex"
                type={+pageNumber === 1 ? true : false}
            />
            {pagination.map((item, index) => (
                <PageNumber key={index} page={item} currentPage={currentPage || 1} setCurrentPage={setCurrentPage} />
            ))}
            <PageNumber
                text={
                    <span className="flex">
                        <FaAnglesRight color="#333" size="9" />
                        <FaAnglesRight color="#333" size="9" />
                    </span>
                }
                page={maxPage}
                setCurrentPage={setCurrentPage}
                className={`${+pageNumber === maxPage ? 'cursor-text' : ''}`}
                type={+pageNumber === maxPage ? true : false}
            />
            <PageNumber
                text="Trang sau"
                page={Math.min(+pageNumber + 1, maxPage)}
                setCurrentPage={setCurrentPage}
                iconRight={<FaAnglesRight color="#333" size="9" />}
                className={`${+pageNumber === maxPage ? 'cursor-text' : ''} hidden sm:flex`}
                type={+pageNumber === maxPage ? true : false}
            />
        </div>
    );
};

export default Pagination;

/* <span className="flex items-center py-4 px-[18px] text-text bg-white rounded border-[#f1f1f1]">
    Trang sau
    <FaAnglesRight color="#333" size="10" />
</span> */
