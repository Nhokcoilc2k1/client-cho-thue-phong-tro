import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, InputForm } from '../../components';

const Login = () => {
    const location = useLocation();
    const [isRegister, setIsRegister] = useState(location.state?.flag);

    useEffect(() => {
        setIsRegister(location.state?.flag);
    }, [location.state?.flag]);
    console.log(location);

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-lg border border-solid border-[#dedede] shadow-sm">
            <h3 className="font-semibold text-3xl mb-3 text-text">
                {isRegister ? 'Đăng kí tài khoản' : 'Đăng nhập'}
            </h3>
            <div className="w-full">
                {isRegister && <InputForm label={'HỌ TÊN'} />}
                <InputForm label={'SỐ ĐIỆN THOẠI'} />
                <InputForm label={'MẬT KHẨU'} />
            </div>
            <Button
                text={isRegister ? 'Đăng kí' : 'Đăng nhập'}
                bgColor="bg-secondary1"
                textColor="text-white"
                fullWith
                height="h-[45px]"
            />
            <div className="flex justify-between mt-[30px]">
                {isRegister ? (
                    <small className="text-sm">
                        Bạn đã có tài khoản?
                        <span
                            className="ml-1 text-sm text-blue-500 hover:underline cursor-pointer"
                            onClick={() => setIsRegister(false)}
                        >
                            Đăng nhập ngay
                        </span>
                    </small>
                ) : (
                    <>
                        <small className="text-[blue] text-sm hover:text-[#f60] cursor-pointer ">
                            Bạn quên mật khẩu ?
                        </small>
                        <small
                            className="text-[blue] text-sm hover:text-[#f60] cursor-pointer "
                            onClick={() => setIsRegister(true)}
                        >
                            Tạo tài khoản mới
                        </small>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;
