import { Button, InputForm } from '../../components';
const Login = () => {
    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-lg border border-solid border-[#dedede] shadow-sm">
            <h3 className="font-semibold text-3xl mb-3 text-text">Đăng nhập</h3>
            <div className="w-full">
                <InputForm label={'SỐ ĐIỆN THOẠI'} />
                <InputForm label={'MẬT KHẨU'} />
            </div>
            <Button
                text={'Đăng nhập'}
                bgColor="bg-secondary1"
                textColor="text-white"
                fullWith
                height="h-[45px]"
            />
            <div className="flex justify-between mt-[30px]">
                <small
                    className="text-[blue] text-sm hover:text-[#f60] cursor-pointer "
                >
                    Bạn quên mật khẩu ?
                </small>
                <small
                    className="text-[blue] text-sm hover:text-[#f60] cursor-pointer "
                >
                    Tạo tài khoản mới
                </small>
            </div>
        </div>
    );
};

export default Login;
