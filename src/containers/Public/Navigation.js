import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Cho thuê phòng trọ', path: 'chothue' },
    { name: 'Nhà cho thuê', path: 'nhathue' },
    { name: 'Cho thuê căn hộ', path: 'canho' },
    { name: 'Cho thuê mặt bằng', path: 'matbang' },
];

const notActive = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary1';
const active = 'hover:bg-secondary2 h-full flex items-center px-4 bg-secondary2 ';

const Navigation = () => {
    return (
        <div className="w-screen h-[40px] flex justify-center items-center bg-secondary1 text-white text-sm">
            <div className="w-1120 h-[40px] flex items-center text-sm font-medium ">
                {nav?.length > 0 &&
                    nav.map((item, index) => {
                        return (
                            <div key={index} className="h-full flex items-center">
                                <NavLink
                                    to={item.path}
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
