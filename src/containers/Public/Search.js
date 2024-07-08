import { useCallback, useState } from 'react';
import SearchItem from '../../components/SearchItem';
import icons from '../../untils/icons';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Modal } from '../../components';
import { nav, province } from '../../assets/data/data';
import { filterAre, filterPrice, path } from '../../untils/contains';

const { CiLocationOn, LiaCropSolid, MdHouseSiding, LiaMoneyBillWaveSolid, IoSearch, GrNext, RiDeleteBack2Line } = icons;

const Search = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [content, setContent] = useState([]);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [queries, setQueries] = useState({});
    const [arrMinMax, setArrMinMax] = useState({});
    const [defaultText, setDefaultText] = useState('');
    const navigate = useNavigate();

    const handleShowModal = useCallback((content, title, name, defaultText) => {
        setContent(content);
        setTitle(title);
        setName(name);
        setDefaultText(defaultText);
        setIsShowModal(true);
    }, []);

    const handleSubmit = useCallback((e, query, arrMinMax) => {
        e.stopPropagation();
        setQueries((prev) => ({ ...prev, ...query }));
        setIsShowModal(false);
        arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMinMax }));
    }, []);

    const handleSearch = () => {
        const queryCode = Object.entries(queries)
            .filter((item) => item[0].includes('Code'))
            .filter((item) => !item[1] === false);
        let queryCodeObj = {};
        queryCode.forEach((item) => {
            queryCodeObj[item[0]] = item[1];
        });
        //Gọi api sau đó điều hướng
        navigate({
            pathname: path.SEARCH,
            search: createSearchParams(queryCodeObj).toString(),
        });
        console.log(queryCodeObj);
    };

    return (
        <>
            <div className="flex flex-col bg-primary2 w-full mt-2 md:flex-row md:bg-bgSearch min-h-[55px] lg:w-984 xl:w-1120 p-[10px] items-center md:justify-between gap-2 md:rounded-lg ">
                <span
                    onClick={() => handleShowModal(nav, 'Chọn loại bất động sản', 'category', 'Phòng trọ, nhà trọ')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem
                        text={queries.category}
                        defaultText="Phòng trọ, nhà trọ"
                        IconRight={RiDeleteBack2Line}
                        IconLeft={MdHouseSiding}
                        fontWeight
                        color
                    />
                </span>
                <span
                    onClick={() => handleShowModal(province, 'Chọn tỉnh thành', 'province', 'Toàn quốc')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem
                        text={queries.province}
                        defaultText="Toàn quốc"
                        IconRight={GrNext}
                        IconLeft={CiLocationOn}
                    />
                </span>
                <span
                    onClick={() => handleShowModal(filterPrice, 'Chọn giá', 'price', 'Chọn giá')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem
                        text={queries.price}
                        defaultText="Chọn giá"
                        IconRight={GrNext}
                        IconLeft={LiaMoneyBillWaveSolid}
                    />
                </span>
                <span
                    onClick={() => handleShowModal(filterAre, 'Chọn diện tích', 'area', 'Chọn diện tích')}
                    className="w-full block md:flex-1 cursor-pointer "
                >
                    <SearchItem
                        text={queries.area}
                        defaultText="Chọn diện tích"
                        IconRight={GrNext}
                        IconLeft={LiaCropSolid}
                    />
                </span>
                <button
                    onClick={handleSearch}
                    className="w-[100%] bg-bgSearch text-text md:flex-1 md:bg-secondary1 md:text-white h-[34px] flex items-center justify-center gap-1 py-2 px-4 rounded  text-sm font-semibold"
                >
                    <span className="text-lg">
                        <IoSearch />
                    </span>
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && (
                <Modal
                    name={name}
                    title={title}
                    content={content}
                    queries={queries}
                    arrMinMax={arrMinMax}
                    handleSubmit={handleSubmit}
                    setIsShowModal={setIsShowModal}
                    defaultText={defaultText}
                />
            )}
        </>
    );
};

export default Search;
