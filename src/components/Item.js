import React, { memo, useState } from 'react';
import icons from '../untils/icons';

const { MdOutlineStarPurple500, PiHeartStraightFill, PiHeartStraightLight } = icons;

const Item = () => {
    const [isHoverHeart, setIsHoverHeart] = useState(false);
    return (
        <div className="flex gap-3 items-start bg-itemBg border-t border-borderItem -mx-5 px-5 py-[15px]">
            <a href="/" className="w-2/5 block relative">
                <img
                    className="w-[280px] h-[240px] object-cover rounded-sm"
                    alt="ảnh phòng trọ"
                    src="https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/06/21/img-9900_1718939812.jpg"
                />
                <span className="bg-overlay-50 text-white text-[13px] px-1 py-[1px] absolute left-1 bottom-1 rounded">
                    5 ảnh
                </span>
                <span
                    className="absolute text-white  right-1.5 bottom-1"
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}
                >
                    {isHoverHeart ? <PiHeartStraightFill size="28" color="red" /> : <PiHeartStraightLight size="28" />}
                </span>
            </a>
            <div className="w-3/5 ">
                <a href="/" className="uppercase block hover:underline mb-[10px] text-itemText font-semibold text-sm">
                    <span className="">
                        <MdOutlineStarPurple500 className="star-item" size="18" color="#ffd454" />
                        <MdOutlineStarPurple500 className="star-item" size="18" color="#ffd454" />
                        <MdOutlineStarPurple500 className="star-item" size="18" color="#ffd454" />
                        <MdOutlineStarPurple500 className="star-item" size="18" color="#ffd454" />
                        <MdOutlineStarPurple500 className="star-item" size="18" color="#ffd454" />
                    </span>
                    Cho thuê phòng trọ 30m2 giá chỉ 4.8tr tại Xã Đàn
                </a>
                <div
                    after="2 giờ trước"
                    className="flex items-center relative mb-2.5 after:absolute after:block after:content-[attr(after)] after:text-sm after:opacity-40 after:right-0 after:mt-10"
                >
                    <span className="text-priceText font-semibold text-base mr-[30px]">4.8 triệu/tháng</span>
                    <span className="font-normal text-sm mr-[30px]">30m2</span>
                    <a href="/" className="capitalize hover:underline font-medium text-sm">
                        quận đống đa, hà nội
                    </a>
                </div>
                <p className="mt-7 text-[#8a8d91] line-clamp-3">
                    Địa chỉ: Ngõ 81 Xã Đàn, thang máy, phòng tầng 2, nhà để xe free rộng rãi (ban công có cửa, pccc đảm
                    bảo).Giá 5tr (có thương lượng), điện 3k5, nước 30k,…
                </p>
                <div className="after:clear-both mt-2.5">
                    <div className="inline-flex items-center mr-4">
                        <img
                            src="https://magicbookofrecord.com/wp-content/uploads/2021/01/anon-avatar-300x300.png"
                            alt="avatar"
                            className="w-[30px] h-[30px] mr-[10px]"
                        />
                        <span className="text-[#8a8d91]">Tuệ Thu</span>
                    </div>
                    <span className="inline-block float-right py-[2px] px-[7px] ml-1 text-sm border border-[#1266dd] rounded text-primary2">
                        Nhắn zalo
                    </span>
                    <span className="inline-block float-right rounded py-[3px] px-[7px]  bg-secondary1 text-white text-sm">
                        Gọi 036656146
                    </span>
                </div>
            </div>
        </div>
    );
};

export default memo(Item);
