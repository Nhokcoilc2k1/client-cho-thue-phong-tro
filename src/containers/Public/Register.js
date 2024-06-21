import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, InputForm } from '../../components';
import validate from '../../untils/validate';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        password: '',
    });
    const [inValidFields, setInValidFields] = useState([]);

    const handleSubmit = () => {
        let invalid = validate(data, setInValidFields);
        console.log(invalid);
    };

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] mt-4 rounded-lg border border-solid border-[#dedede] shadow-sm">
            <h3 className="font-semibold text-3xl mb-3 text-text">Đăng kí</h3>
            <div className="w-full">
                <InputForm
                    label={'HỌ TÊN'}
                    name={'name'}
                    value={data.name}
                    setValue={setData}
                    inValidFields={inValidFields}
                    setInValidFields={setInValidFields}
                />
                <InputForm
                    label={'SỐ ĐIỆN THOẠI'}
                    name={'phone'}
                    value={data.phone}
                    setValue={setData}
                    inValidFields={inValidFields}
                    setInValidFields={setInValidFields}
                />
                <InputForm
                    label={'MẬT KHẨU'}
                    name={'password'}
                    type={'password'}
                    value={data.password}
                    setValue={setData}
                    inValidFields={inValidFields}
                    setInValidFields={setInValidFields}
                />
            </div>
            <Button
                text="Đăng kí"
                className="h-[45px] w-full hover:underline bg-secondary1 text-white"
                onClick={handleSubmit}
            />
            <div className="mt-[30px]">
                <small className=" text-sm">
                    Bạn đã có tài khoản?
                    <Link to={'/login'}>
                        <span className="ml-1 inline-block text-blue-500 hover:underline cursor-pointer">
                            Đăng nhập ngay
                        </span>
                    </Link>
                </small>
            </div>
        </div>
    );
};

export default Register;
