import React from 'react';
import { Button, Item } from '../../components';
import { dataPost } from '../../assets/data/data';

const List = () => {
    return (
        <div className="w-full p-5 mb-5 rounded-md border-[#dcdbdb] border bg-white">
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
                {dataPost.length > 0 &&
                    dataPost.map((item, index) => (
                        <Item
                            key={index}
                            title={item?.title}
                            image={item?.image}
                            description={item?.description}
                            address={item?.address}
                            attribute={item?.attribute}
                            star={+item?.star}
                            user={item?.user}
                            id={item?.id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default List;
