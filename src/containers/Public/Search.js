import { useCallback, useState } from 'react';
import SearchItem from '../../components/SearchItem';
import icons from '../../untils/icons';
import { Modal } from '../../components';
import { nav, province } from '../../assets/data/data';
import { filterAre, filterPrice } from '../../untils/contains';

const { CiLocationOn, LiaCropSolid, MdHouseSiding, LiaMoneyBillWaveSolid, IoSearch, GrNext, RiDeleteBack2Line } = icons;

const Search = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [content, setContent] = useState([]);
    const [name, setName] = useState('');

    const handleShowModal = useCallback((content, name) => {
        setContent(content);
        setName(name);
        setIsShowModal(true);
    }, []);

    return (
        <>
            <div className="flex flex-col bg-primary2 w-full mt-2 md:flex-row md:bg-bgSearch min-h-[55px] lg:w-984 xl:w-1120 p-[10px] items-center md:justify-between gap-2 md:rounded-lg ">
                <span
                    onClick={() => handleShowModal(nav, 'Chọn loại bất động sản')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem
                        text="Phòng trọ, nhà trọ"
                        IconRight={RiDeleteBack2Line}
                        IconLeft={MdHouseSiding}
                        fontWeight
                        color
                    />
                </span>
                <span
                    onClick={() => handleShowModal(province, 'Chọn tỉnh thành')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem text="Toàn quốc" IconRight={GrNext} IconLeft={CiLocationOn} />
                </span>
                <span
                    onClick={() => handleShowModal(filterPrice, 'Chọn giá')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem text="Chọn giá" IconRight={GrNext} IconLeft={LiaMoneyBillWaveSolid} />
                </span>
                <span
                    onClick={() => handleShowModal(filterAre, 'Chọn diện tích')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem text="Chọn diện tích" IconRight={GrNext} IconLeft={LiaCropSolid} />
                </span>
                <button className="w-[100%] bg-bgSearch text-text md:flex-1 md:bg-secondary1 md:text-white h-[34px] flex items-center justify-center gap-1 py-2 px-4 rounded  text-sm font-semibold">
                    <span className="text-lg">
                        <IoSearch />
                    </span>
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && <Modal name={name} content={content} setIsShowModal={setIsShowModal} type />}
        </>
    );
};

export default Search;
