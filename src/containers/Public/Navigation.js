import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatVietnameseToString } from '../../untils/Common/formatVietnameseToString';

const nav = [
    { name: 'Cho thuê phòng trọ', path: 'chothue' },
    { name: 'Nhà cho thuê', path: 'nhathue' },
    { name: 'Cho thuê căn hộ', path: 'canho' },
    { name: 'Cho thuê mặt bằng', path: 'matbang' },
];

const notActive = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary1';
const active = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary2 ';

const Navigation = () => {
    return (
        <div className="hidden md:flex w-full h-[40px]  justify-center items-center bg-secondary1 text-white text-sm ">
            <div className="h-[40px] flex items-center text-sm font-medium w-full lg:w-984 xl:w-1120">
                <NavLink to={'/'} className={({ isActive }) => (isActive ? active : notActive)}>
                    Trang chủ
                </NavLink>
                {nav?.length > 0 &&
                    nav.map((item, index) => {
                        return (
                            <div key={index} className="h-full flex items-center">
                                <NavLink
                                    to={`${formatVietnameseToString(item.name)}`}
                                    className={({ isActive }) => (isActive ? active : notActive)}
                                >
                                    {item.name}
                                </NavLink>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Navigation;
