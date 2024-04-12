import React from 'react';
import SearchItem from '../../components/SearchItem';
import icons from '../../untils/icons';

const { CiLocationOn, LiaCropSolid, MdHouseSiding, LiaMoneyBillWaveSolid, IoSearch, GrNext, RiDeleteBack2Line } = icons;

const Search = () => {
    return (
        <div className=" flex min-h-[55px] w-full p-[10px] items-center justify-between gap-2 rounded-lg bg-bgSearch">
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
            <button className="basis-1/5 h-[34px] flex items-center justify-center gap-1 bg-secondary1 py-2 px-4 rounded text-white text-sm font-semibold">
                <span className="text-lg">
                    <IoSearch />
                </span>
                Tìm kiếm
            </button>
        </div>
    );
};

export default Search;
