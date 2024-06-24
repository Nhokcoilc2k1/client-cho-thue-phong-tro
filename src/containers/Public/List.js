import React from 'react';
import { Button, Item } from '../../components';

const List = () => {
    return (
        <div className="w-full p-5 rounded-md border-[#dcdbdb] border bg-white">
            <div className="flex justify-between mb-[15px]">
                <h4 className="text-lg font-semibold">Danh sách tin đăng</h4>
                <span>Cập nhật ngày</span>
            </div>
            <div className="flex items-center gap-1 mb-[10px]">
                <span>Sắp xếp: </span>
                <Button
                    className="py-[5px] px-[10px] text-text  underline font-semibold hover:bg-[#e7f0f7] bg-gray-200"
                    text={'Mặc đinh'}
                />
                <Button className="py-[5px] px-[10px] text-tex hover:bg-[#e7f0f7] bg-gray-200" text={'Mới nhất'} />
                <Button className="py-[5px] px-[10px] text-text hover:bg-[#e7f0f7] bg-gray-200" text={'Có video'} />
            </div>
            <div>
                <Item />
                <Item />
                <Item />
            </div>
        </div>
    );
};

export default List;
