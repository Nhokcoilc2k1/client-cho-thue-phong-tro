import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, InputForm } from '../../components';
import validate from '../../untils/validate';

const Login = () => {
    const [data, setData] = useState({
        phone: '',
        password: '',
    });
    const [inValidFields, setInValidFields] = useState([]);

    const handleSubmit = () => {
        let invalids = validate(data, setInValidFields);
        console.log(invalids);
    };

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-lg border border-solid border-[#dedede] shadow-sm">
            <h3 className="font-semibold text-3xl mb-3 text-text">Đăng nhập</h3>
            <div className="w-full">
                <InputForm
                    label={'SỐ ĐIỆN THOẠI'}
                    value={data.phone}
                    setValue={setData}
                    name="phone"
                    inValidFields={inValidFields}
                    setInValidFields={setInValidFields}
                />
                <InputForm
                    label={'MẬT KHẨU'}
                    value={data.password}
                    setValue={setData}
                    name="password"
                    type={'password'}
                    inValidFields={inValidFields}
                    setInValidFields={setInValidFields}
                />
            </div>
            <Button
                text={'Đăng nhập'}
                bgColor="bg-secondary1"
                textColor="text-white"
                fullWith
                height="h-[45px]"
                onClick={handleSubmit}
            />
            <div className="flex justify-between mt-[30px]">
                <small className="text-[blue] text-sm hover:text-[#f60] cursor-pointer ">
                    Bạn quên mật khẩu ?
                </small>
                <Link to={'/register'}>
                    <small className="text-[blue] text-sm hover:text-[#f60] cursor-pointer ">
                        Tạo tài khoản mới
                    </small>
                </Link>
            </div>
        </div>
    );
};

export default Login;
