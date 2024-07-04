import React, { memo, useState } from 'react';
import icons from '../untils/icons';
import { Link, useNavigate } from 'react-router-dom';
import { formatVietnameseToString } from '../untils/Common/formatVietnameseToString';

const { MdOutlineStarPurple500, PiHeartStraightFill, PiHeartStraightLight } = icons;

const Item = ({ title, image, description, address, star, attribute, user, id }) => {
    const [isHoverHeart, setIsHoverHeart] = useState(false);
    const navigate = useNavigate();

    const handleStar = () => {
        let stars = [];
        for (let i = 1; i <= +star; i++)
            stars.push(<MdOutlineStarPurple500 className="star-item" size="18" color="#ffd454" />);

        return stars;
    };
    return (
        <div className="flex flex-col sm:flex-row gap-3 items-start bg-itemBg border-t border-borderItem -mx-5 px-5 py-[15px]">
            <Link to={`chi-tiet/${formatVietnameseToString(title)}/${id}`} className="w-full sm:w-2/5 block relative">
                <img
                    className="w-full h-[240px] lg:w-[280px] md:h-[240px] object-cover rounded-sm"
                    alt="ảnh phòng trọ"
                    src={image}
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
            </Link>
            <div className="w-full sm:w-3/5 ">
                <Link
                    to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
                    className="uppercase block hover:underline mb-[10px] text-itemText font-semibold text-sm"
                >
                    {handleStar(+star).length > 0 &&
                        handleStar(+star).map((star, index) => <span key={index}>{star}</span>)}

                    {title}
                </Link>
                <div
                    after="2 giờ trước"
                    className="flex items-center relative mb-2.5 after:absolute after:block after:content-[attr(after)] after:text-sm after:opacity-40 after:right-0 after:mt-10"
                >
                    <span className="text-priceText font-semibold text-base mr-[30px]">4.8 triệu/tháng</span>
                    <span className="font-normal text-sm mr-[30px]">30m2</span>
                    <a href="/" className="capitalize hover:underline font-medium text-sm">
                        {address}
                    </a>
                </div>
                <p className="mt-7 text-[#8a8d91] line-clamp-3">{description}</p>
                <div className="after:clear-both mt-3.5">
                    <div className="inline-flex items-center mr-4">
                        <img
                            src="https://magicbookofrecord.com/wp-content/uploads/2021/01/anon-avatar-300x300.png"
                            alt="avatar"
                            className="w-[30px] h-[30px] mr-[10px]"
                        />
                        <span className="text-[#8a8d91]">{user.name}</span>
                    </div>
                    <span className="inline-block float-right py-[2px] px-[7px] ml-1 text-sm border border-[#1266dd] rounded text-primary2">
                        Nhắn zalo
                    </span>
                    <span className="inline-block float-right rounded py-[3px] px-[7px]  bg-secondary1 text-white text-sm">
                        {`Gọi ${user.phone}`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default memo(Item);
