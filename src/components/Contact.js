import React from 'react';
import { textContact } from '../untils/dataContact';
import Button from './Button';
import icons from '../untils/icons';

const { FaPhone, SiZalo } = icons;

const Contact = () => {
    return (
        <div className="mt-3 md:mt-[30px] mb-5 md:px-4 w-full lg:px-0 lg:w-984 xl:w-1120">
            <div className="bg-[#3f51b5] md:bg-white sm:rounded-md  text-center p-3  sm:p-[30px] sm:border-dashed sm:border-[6px] sm:border-[#e8eefc]">
                <img src={textContact.image} alt="thumbnail" className="hidden md:block w-full h-48 object-contain " />
                <p className="hidden md:block text-base text-textContact mt-[30px]">{textContact.content}</p>
                <p className="md:hidden text-lg text-white text-start">Hỗ trợ khách hàng</p>
                <div className="flex flex-wrap my-5 md:my-6">
                    {textContact.contacts.map((el, index) => (
                        <div key={index} className="basis-1/2 text-start mb-4 md:text-center md:flex-1 font-semibold">
                            <p className="hidden md:block uppercase text-sm mb-1.5  text-hv">{el.text}</p>
                            <p className="hidden md:block text-lg text-textContact ">{el.phone}</p>
                            <p className="hidden md:block text-lg text-textContact ">{el.Zalo}</p>
                            <p className="md:hidden text-sm mb-1.5  text-hv">{el.text}</p>
                            <p className="md:hidden flex items-center text-[13px] text-white ">
                                <FaPhone className="mr-1.5 bg-green-500 mb-2 p-1 rounded-full" size="22" />
                                {el.phone.split(':')[1]}
                            </p>
                            <p className="md:hidden flex items-center text-[13px] text-white ">
                                <SiZalo className="mr-1.5 bg-blue-500 p-1 rounded-full" size="22" />
                                {el.Zalo.split(':')[1]}
                            </p>
                        </div>
                    ))}
                    <p className="hidden md:flex-1 md:flex justify-center items-center">
                        <Button
                            text="Gửi liên hệ"
                            className="py-2.5 px-[30px] bg-secondary1 text-white hover:underline"
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
