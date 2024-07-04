import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const notActive =
    'flex items-center py-2 px-3.5 md:py-3.5 md:px-[18px] text-text bg-white hover:bg-gray-200 rounded select-none ';
const active = 'flex items-center py-2 px-3.5 md:py-3.5 md:px-[18px] bg-[#e13427] text-white rounded select-none ';

const PageNumber = ({ page, text, iconLeft, iconRight, currentPage, setCurrentPage, className, type }) => {
    const navigate = useNavigate();
    const handleChangePAge = () => {
        if (!(page === '...')) {
            if (!type) {
                setCurrentPage(+page);
                navigate({
                    pathname: '/',
                    search: createSearchParams({
                        page: page,
                    }).toString(),
                });
            }
        }
    };
    return (
        <div
            className={
                +currentPage === +page
                    ? active
                    : `${notActive} ${page === '...' ? 'cursor-text' : 'cursor-pointer'} ${
                          +page === 1 ? 'cursor-text disabled' : 'cursor-pointer'
                      } ${className}`
            }
            onClick={handleChangePAge}
        >
            {iconLeft && <span className="mr-1">{iconLeft}</span>}
            {text ? text : page}
            {iconRight && <span className="ml-1">{iconRight}</span>}
        </div>
    );
};

export default PageNumber;
