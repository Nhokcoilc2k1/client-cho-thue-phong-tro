const validate = (data, setInValidFields) => {
    let invalids = 0;
    let fields = Object.entries(data);
    fields.forEach((el) => {
        if (el[1] === '') {
            setInValidFields((prev) => [
                ...prev,
                {
                    name: el[0],
                    massage: 'Bạn không được bỏ trống trường này !',
                },
            ]);
            invalids++;
        }
    });
    fields.forEach((el) => {
        switch (el[0]) {
            case 'password':
                if (el[1].length < 6) {
                    setInValidFields((prev) => [
                        ...prev,
                        {
                            name: el[0],
                            massage: 'Mật khẩu phải có tối thiểu 6 kí tự !',
                        },
                    ]);
                    invalids++;
                }
                break;
            case 'phone':
                if (!+el[1]) {
                    setInValidFields((prev) => [
                        ...prev,
                        {
                            name: el[0],
                            massage: 'Số điện thoại không hợp lệ',
                        },
                    ]);
                    invalids++;
                }
                break;
            default:
                break;
        }
    });

    // Check invalid
    if (invalids === 0) {
        return true;
    } else return false;
};

export default validate;
