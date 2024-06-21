import React from 'react';
import SearchItem from '../../components/SearchItem';
import icons from '../../untils/icons';

const { CiLocationOn, LiaCropSolid, MdHouseSiding, LiaMoneyBillWaveSolid, IoSearch, GrNext, RiDeleteBack2Line } = icons;

const Search = () => {
    return (
        <div className="flex flex-col bg-primary2 w-full mt-2 md:flex-row md:bg-bgSearch min-h-[55px] lg:w-984 xl:w-1120 p-[10px] items-center md:justify-between gap-2 md:rounded-lg ">
            <SearchItem
                text={'Phòng trọ, nhà trọ'}
                IconRight={<RiDeleteBack2Line />}
                IconLeft={<MdHouseSiding />}
                fontWeight
                color
            />
            <SearchItem text={'Toàn quốc'} IconRight={<GrNext />} IconLeft={<CiLocationOn />} />
            <SearchItem text={'Chọn giá'} IconRight={<GrNext />} IconLeft={<LiaMoneyBillWaveSolid />} />
            <SearchItem text={'Chọn diện tích'} IconRight={<GrNext />} IconLeft={<LiaCropSolid />} />
            <button className="w-[100%] bg-bgSearch text-text md:basis-1/5 md:bg-secondary1 md:text-white h-[34px] flex items-center justify-center gap-1 py-2 px-4 rounded  text-sm font-semibold">
                <span className="text-lg">
                    <IoSearch />
                </span>
                Tìm kiếm
            </button>
        </div>
    );
};

export default Search;
