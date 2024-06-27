import React from 'react';
import { textIntro } from '../untils/dataIntro';
import icons from '../untils/icons';
import Button from './Button';
import { Link } from 'react-router-dom';
import { formatVietnameseToString } from '../untils/Common/formatVietnameseToString';

const { MdOutlineStarPurple500 } = icons;
const star = [1, 2, 3, 4, 5];
const link = [
    { name: 'cho thuê phòng trọ' },
    { name: 'nhà trọ' },
    { name: 'thuê nhà nguyên căn' },
    { name: 'cho thuê căn hộ' },
    { name: 'tìm người ở ghép' },
    { name: 'cho thuê mặt bằng' },
];

const Intro = () => {
    return (
        <div className="mt-3 md:my-5 md:px-4 w-full lg:px-0 lg:w-984 xl:w-1120">
            <div className="pt-5 px-6 pb-6 md:pt-10 md:px-[70px] md:pb-[70px] text-text text-center  bg-white sm:rounded-lg sm:border sm:border-borderContent">
                <h4 className="text-lg font-semibold">{textIntro.title}</h4>
                <p className="my-3.5 text-sm">
                    {textIntro.description}{' '}
                    {link.map((item, index) => (
                        <Link
                            key={index}
                            to={`/${formatVietnameseToString(item.name)}`}
                            className="text-blue-500 font-semibold text-sm hover:text-hv"
                        >
                            {`${item.name}, `}
                        </Link>
                    ))}{' '}
                    {textIntro.description2}
                </p>
                <div className="flex flex-wrap justify-around">
                    {textIntro.statistic.map((el) => (
                        <div key={el.name} className="basis-1/2 mb-2.5 md:flex-1">
                            <p className=" text-xl font-semibold">{el.value}</p>
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
                <h4 className="text-lg my-2.5 font-semibold">{textIntro.price}</h4>
                <div className="flex justify-center gap-1">
                    {star.map((el) => (
                        <span key={el}>
                            <MdOutlineStarPurple500 color="yellow" size="24" />
                        </span>
                    ))}
                </div>
                <p className="text-sm my-3.5 italic">{textIntro.comment}</p>
                <p className="text-sm mt-2.5">{textIntro.author}</p>
                <p className="text-lg mt-4 font-semibold">{textIntro.question}</p>
                <p className="text-sm my-3.5 mt-2.5">{textIntro.answer}</p>
                <div className="flex justify-center">
                    <Button
                        text="Đăng tin ngay"
                        className="py-2.5 px-[30px] bg-secondary2 text-white text-sm hover:underline"
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
