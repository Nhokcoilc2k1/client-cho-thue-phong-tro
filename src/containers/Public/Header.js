import { useCallback } from 'react';
import { images } from '../../assets/images';
import Button from '../../components/Button';
import icons from '../../untils/icons';
import { Link, useNavigate } from 'react-router-dom';
import { path } from '../../untils/contains';

const { IoMdHeartEmpty, FiUserPlus, IoIosLogIn, GoPlusCircle, IoIosLogOut, IoMdMenu } = icons;

function Header() {
    const navigate = useNavigate();
    const userInfo = false;

    const goLogin = useCallback(
        (flag) => {
            if (flag === 1) {
                navigate(path.LOGIN);
            } else if (flag === 2) navigate(path.REGISTER);
        },
        [navigate],
    );

    return (
        <div className="flex items-center justify-between bg-white w-screen md:w-screen lg:w-984 xl:w-1120 ">
            <Link to={'/'} className="ml-4 lg:ml-0">
                <img
                    src={images.logo}
                    alt="logo"
                    className="h-[46px] w-[180px] md:w-[240px] md:h-[70px] object-contain"
                />
            </Link>
            <div className="flex items-center p-2 cursor-pointer text-2xl  mr-3 md:hidden">
                <IoMdMenu />
            </div>
            <div className="hidden mr-4 md:flex md:items-center md:gap-1">
                {userInfo ? (
                    <>
                        <span className="mr-1 text-text text-sm">Tên !</span>
                        <Button text="Đăng xuất" textColor="text-white" bgColor="bg-red-700" IconRight={IoIosLogOut} />
                    </>
                ) : (
                    <>
                        <Button
                            text="Yêu thích"
                            className="h-36[px] py-2 px-4 text-white bg-secondary1 hover:underline"
                            IconLeft={IoMdHeartEmpty}
                        />
                        <Button
                            text="Đăng nhập"
                            className="h-36[px] py-2 px-4 text-white bg-secondary1 hover:underline"
                            IconLeft={FiUserPlus}
                            onClick={() => goLogin(1)}
                        />
                        <Button
                            text="Đăng kí"
                            className="h-36[px] py-2 px-4 text-white bg-secondary1 hover:underline"
                            IconLeft={IoIosLogIn}
                            onClick={() => goLogin(2)}
                        />
                    </>
                )}
                <Button
                    text="Đăng tin miễn phí"
                    className="h-36[px] py-2 px-4 text-white bg-secondary2 hover:underline "
                    // textColor="text-white"
                    // bgColor="bg-secondary2"
                    // hover="hover:underline"
                    IconRight={GoPlusCircle}
                />
            </div>
        </div>
    );
}

export default Header;
