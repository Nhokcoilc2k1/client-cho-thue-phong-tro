import React from 'react';
import Sitem from './Sitem';

const RelatedPost = () => {
    return (
        <div className="p-5 mb-5 bg-white rounded-lg border border-borderContent">
            <h4 className="text-text text-lg font-semibold mb-3">Tin mới đăng</h4>
            <Sitem
                title="NHÀ MỚI XÂY - PHÒNG RỘNG RÃI - CÓ GÁC CAO - NGAY KHU CNC- CÓ GÁC CAO - NGAY KHU CNC"
                price="3.2 triệu/tháng"
                createdAt="8 giờ trước"
            />
            <Sitem
                title="KHAI TRƯƠNG CĂN DUPLEX HIỆN ĐẠI FULL NỘI THẤT TRUNG TÂM Q10"
                price="3.2 triệu/tháng"
                createdAt="8 giờ trước"
            />
            <Sitem
                title="NHÀ MỚI XÂY - PHÒNG RỘNG RÃI - CÓ GÁC CAO - NGAY KHU CNC- CÓ GÁC CAO - NGAY KHU CNC"
                price="3.2 triệu/tháng"
                createdAt="8 giờ trước"
            />
        </div>
    );
};

export default RelatedPost;
