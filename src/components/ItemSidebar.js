import React from 'react';
import icons from '../untils/icons';
import { filterPrice, filterAre, categorySidebar } from '../untils/contains';

const { MdNavigateNext } = icons;

const ItemSidebar = ({ title, isDouble }) => {
    const formatContent = (data) => {
        const oddEl = data?.filter((item, index) => index % 2 !== 0);
        const evenEl = data?.filter((item, index) => index % 2 === 0);
        const formatContent = evenEl?.map((item, index) => {
            return {
                left: item,
                right: oddEl?.find((item2, index2) => index2 === index),
            };
        });
        return formatContent;
    };
    return (
        <div className="p-5 mb-5 bg-white rounded-lg border border-[#dcdbdb]">
            <h4 className="text-text text-lg font-semibold mb-3">{title}</h4>
            {!isDouble && (
                <>
                    {categorySidebar.map((el, index) => {
                        return (
                            <div key={index}>
                                {!el.subItem && (
                                    <div className="flex gap-1 items-center text-sm text-text py-1.5 border-b border-dotted hover:text-hv cursor-pointer">
                                        <MdNavigateNext size="18" color="#999" />
                                        <p>{el.name}</p>
                                    </div>
                                )}
                                {el.subItem && (
                                    <div>
                                        <div className="flex gap-1 items-center text-sm text-text py-1.5 border-b border-dotted hover:text-hv cursor-pointer">
                                            <MdNavigateNext size="18" color="#999" />
                                            <p>{el.name}</p>
                                        </div>
                                        {el.subItem.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex gap-1 items-center text-sm text-text py-1.5 ml-4 border-b border-dotted hover:text-hv cursor-pointer"
                                            >
                                                <MdNavigateNext size="18" color="#999" />
                                                <p>{item.name}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </>
            )}
            {isDouble && (
                <>
                    {filterPrice.length > 0 &&
                        formatContent(filterPrice).map((el, index) => {
                            return (
                                <div
                                    key={index}
                                    className=" flex  w-full text-sm text-text py-1.5  border-b border-dotted"
                                >
                                    <div className="flex flex-1 gap-1 items-center hover:text-hv cursor-pointer">
                                        <MdNavigateNext size="18" color="#999" />
                                        <p>{el.left.name}</p>
                                    </div>
                                    <div className="flex flex-1 gap-1 items-center hover:text-hv cursor-pointer">
                                        <MdNavigateNext size="18" color="#999" />
                                        <p>{el.right.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                </>
            )}
        </div>
    );
};

export default ItemSidebar;
