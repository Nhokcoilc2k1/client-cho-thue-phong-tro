import { useCallback } from 'react';
import { images } from '../../assets/images';
import Button from '../../components/Button';
import icons from '../../untils/icons';
import { useNavigate } from 'react-router-dom';
import { path } from '../../untils/contains';

const { IoMdHeartEmpty, FiUserPlus, IoIosLogIn, GoPlusCircle } = icons;

function Header() {
    const navigate = useNavigate();
    const goLogin = useCallback(() => {
        navigate(path.LOGIN);
    }, [navigate]);

    return (
        <div className="w-1120 flex items-center justify-between">
            <img
                src={images.logo}
                alt="logo"
                className="w-[240px] h-[70px] object-contain"
            />
            <div className="flex items-center gap-1">
                <Button
                    text="Yêu thích"
                    textColor="text-white"
                    bgColor="bg-secondary1"
                    IconLeft={IoMdHeartEmpty}
                />
                <Button
                    text="Đăng nhập"
                    textColor="text-white"
                    bgColor="bg-secondary1"
                    IconLeft={FiUserPlus}
                    onClick={goLogin}
                />
                <Button
                    text="Đăng kí"
                    textColor="text-white"
                    bgColor="bg-secondary1"
                    IconLeft={IoIosLogIn}
                    onClick={goLogin}
                />
                <Button
                    text="Đăng tin miễn phí"
                    textColor="text-white"
                    bgColor="bg-secondary2"
                    IconRight={GoPlusCircle}
                />
            </div>
        </div>
    );
}

export default Header;
