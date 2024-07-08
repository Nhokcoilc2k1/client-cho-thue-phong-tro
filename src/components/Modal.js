import React, { useState, useEffect, memo } from 'react';
import icons from '../untils/icons';
import Button from './Button';
import { getNumberPrice } from '../untils/Common/getNumber';
import { getCodes } from '../untils/Common/getCode';

const { GoArrowLeft } = icons;

const Modal = ({ setIsShowModal, content, name, title, queries, arrMinMax, defaultText, handleSubmit }) => {
    const [percent1, setPercent1] = useState(
        name === 'price' && arrMinMax?.priceArr
            ? arrMinMax?.priceArr[0]
            : name === 'area' && arrMinMax?.areaArr
            ? arrMinMax?.areaArr[0]
            : 0,
    );
    const [percent2, setPercent2] = useState(
        name === 'price' && arrMinMax?.priceArr
            ? arrMinMax?.priceArr[1]
            : name === 'area' && arrMinMax?.areaArr
            ? arrMinMax?.areaArr[1]
            : 100,
    );
    const [activeEl, setActiveEl] = useState('');

    useEffect(() => {
        if (name === 'price' || name === 'area') {
            const activeTrackEl = document.getElementById('track-active');
            if (percent2 <= percent1) {
                activeTrackEl.style.left = `${percent2}%`;
                activeTrackEl.style.right = `${100 - +percent1}%`;
            } else {
                activeTrackEl.style.left = `${percent1}%`;
                activeTrackEl.style.right = `${100 - +percent2}%`;
            }
        }
    }, [percent1, percent2, name]);

    const handleClickTrack = (e, value) => {
        e.stopPropagation();
        const stackEl = document.getElementById('track');
        const stackRect = stackEl.getBoundingClientRect();
        let percent = Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent);
        } else {
            setPercent2(percent);
        }
        activeEl && setActiveEl('');
    };

    const convert100ToTarget = (percent) => {
        return name === 'price'
            ? (Math.ceil(Math.round(+percent * 1.5) / 5) * 5) / 10
            : name === 'area'
            ? Math.ceil(Math.round(+percent * 0.9) / 5) * 5
            : 0;
    };
    const convertTo100 = (percent) => {
        let target = name === 'price' ? 15 : name === 'area' ? 90 : 1;
        return Math.floor((percent / target) * 100);
    };

    const handlePrice = (code, string) => {
        setActiveEl(code);
        let arrMaxMin = getNumberPrice(string);
        if (arrMaxMin.length === 1) {
            if (+arrMaxMin[0] === 1) {
                setPercent1(0);
                setPercent2(convertTo100(1));
                console.log(convertTo100(1));
            }
            if (+arrMaxMin[0] === 20) {
                setPercent1(0);
                setPercent2(convertTo100(20));
            }
            if (+arrMaxMin[0] === 15 || +arrMaxMin === 90) {
                setPercent1(100);
                setPercent2(100);
            }
        } else if (arrMaxMin.length === 2) {
            setPercent1(convertTo100(arrMaxMin[0]));
            setPercent2(convertTo100(arrMaxMin[1]));
        }
    };

    const handleBeforeSubmit = (e) => {
        let arrMinMax =
            percent1 < percent2
                ? [convert100ToTarget(percent1), convert100ToTarget(percent2)]
                : [convert100ToTarget(percent2), convert100ToTarget(percent1)];
        const gaps = getCodes(arrMinMax, content);
        handleSubmit(
            e,
            {
                [`${name}Code`]: gaps.map((item) => item.code),
                [name]: `${arrMinMax.join('-')}${name === 'price' ? ' triệu' : 'm2'}`,
            },
            {
                [`${name}Arr`]: [percent1, percent2],
            },
        );
    };

    return (
        <div
            onClick={() => {
                setIsShowModal(false);
            }}
            className="fixed z-10 top-0 left-0 right-0 bottom-0 bg-overlay-30"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShowModal(true);
                }}
                className=" w-2/5 h-[500px] relative mx-auto mt-20 bg-white rounded-lg "
            >
                <div className="h-[45px] relative flex items-center border-b border-borderContent">
                    <span
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsShowModal(false);
                        }}
                        className="p-1.5 absolute left-0 top-0.5 block cursor-pointer"
                    >
                        <GoArrowLeft size="30" />
                    </span>
                    <h4 className="w-full uppercase text-text text-sm text-center font-semibold">{title}</h4>
                </div>
                {(name === 'category' || name === 'province') && (
                    <div className="py-2.5 px-6">
                        <div className="flex items-center py-3 pr-2.5 text-sm border-b border-borderContent ">
                            <input
                                type="radio"
                                name={name}
                                id="default"
                                checked={!queries[`${name}Code`] ? true : false}
                                onChange={(e) => handleSubmit(e, { [name]: defaultText, [`${name}Code`]: null })}
                            />
                            <label htmlFor="default" className="ml-2">
                                {defaultText}
                            </label>
                        </div>
                        {content?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center py-3 pr-2.5 text-sm border-b border-borderContent "
                            >
                                <input
                                    type="radio"
                                    name={name}
                                    value={item.code}
                                    id={index}
                                    checked={item.code === queries[`${name}Code`] ? true : false}
                                    onChange={(e) => handleSubmit(e, { [name]: item.name, [`${name}Code`]: item.code })}
                                />
                                <label htmlFor={index} className="ml-2">
                                    {item.name}
                                </label>
                            </div>
                        ))}
                    </div>
                )}
                {(name === 'price' || name === 'area') && (
                    <>
                        <div className="px-8 pb-12 pt-20">
                            <div className="flex flex-col items-center relative">
                                <div className="absolute z-10 -top-14 text-lg font-semibold text-orange-500">
                                    {percent1 === 100 && percent2 === 100
                                        ? `Trên ${convert100ToTarget(percent1)} ${
                                              name === 'price' ? 'triệu +' : 'm2 +'
                                          }`
                                        : `Từ ${
                                              percent1 <= percent2
                                                  ? convert100ToTarget(percent1)
                                                  : convert100ToTarget(percent2)
                                          } - ${
                                              percent2 >= percent1
                                                  ? convert100ToTarget(percent2)
                                                  : convert100ToTarget(percent1)
                                          } ${name === 'price' ? 'triệu ' : ' m2'} `}
                                </div>
                                <div
                                    id="track"
                                    onClick={handleClickTrack}
                                    className="slider-track h-[5px] w-full absolute top-0 bottom-0 bg-gray-300 rounded-full"
                                ></div>
                                <div
                                    id="track-active"
                                    onClick={handleClickTrack}
                                    className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-500 rounded-full"
                                ></div>
                                <input
                                    value={percent1}
                                    max="100"
                                    min="0"
                                    step="1"
                                    type="range"
                                    className="w-full appearance-none pointer-events-none absolute top-0 bottom-0 "
                                    onChange={(e) => {
                                        setPercent1(+e.target.value);
                                        activeEl && setActiveEl('');
                                    }}
                                />
                                <input
                                    value={percent2}
                                    max="100"
                                    min="0"
                                    step="1"
                                    type="range"
                                    className="w-full appearance-none pointer-events-none absolute top-0 bottom-0 "
                                    onChange={(e) => {
                                        setPercent2(+e.target.value);
                                        activeEl && setActiveEl('');
                                    }}
                                />
                                <div className="absolute z-10 top-4 left-0 right-0 flex justify-between items-center">
                                    <span
                                        className="px-2.5 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setPercent1(0);
                                        }}
                                    >
                                        0
                                    </span>
                                    <span
                                        className="-mr-3 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setPercent2(100);
                                        }}
                                    >
                                        {name === 'price' ? '15 triệu +' : name === 'area' ? 'Trên 90 m2' : ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 px-8 ">
                            <h4 className="text-sm font-semibold text-text my-4">Chọn nhanh: </h4>
                            <div className=" flex gap-2 flex-wrap items-center w-full">
                                {content?.map((item, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => handlePrice(item.code, item.name)}
                                        className={`px-4 py-1 bg-[#f1f1f1] text-sm rounded-md cursor-pointer ${
                                            item.code === activeEl ? 'bg-blue-500 text-white' : ''
                                        }`}
                                        text={item.name}
                                    />
                                ))}
                            </div>
                        </div>
                        <Button
                            text="Áp dụng"
                            onClick={handleBeforeSubmit}
                            className="w-full mt-16 h-[50px] absolute bottom-0 bg-[#ffa500] uppercase font-semibold text-sm rounded-none rounded-b-lg cursor-pointer"
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default memo(Modal);
