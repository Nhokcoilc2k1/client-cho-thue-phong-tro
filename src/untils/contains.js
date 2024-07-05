export const path = {
    HOME: '/*',
    HOME__PAGE: ':page',
    LOGIN: 'login',
    REGISTER: 'register',
    CHO_THUE_CAN_HO: 'cho-thue-can-ho',
    CHO_THUE_MAT_BANG: 'cho-thue-mat-bang',
    CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
    NHA_CHO_THUE: 'nha-cho-thue',
    DETAIL_POST_TITLE_POSTID: 'chi-tiet/:title/:postId',
};

export const text = {
    HOME_TITLE: 'Tìm kiếm chỗ thuê ưng ý',
    HOME_DESCRIPTION:
        'Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.',
};

export const localtion = [
    {
        id: 'hcm',
        name: 'Phòng trọ Hồ Chí Minh',
        image: 'https://phongtro123.com/images/location_hcm.jpg',
    },
    {
        id: 'hn',
        name: 'Phòng trọ Hà Nội',
        image: 'https://phongtro123.com/images/location_hn.jpg',
    },
    {
        id: 'dn',
        name: 'Phòng trọ Đà Nẵng',
        image: 'https://phongtro123.com/images/location_dn.jpg',
    },
];

export const filterPrice = [
    {
        code: 1,
        name: 'Dưới 1 triệu',
    },
    {
        code: 2,
        name: 'Từ 1 - 2 triệu',
    },
    {
        code: 3,
        name: 'Từ 2 - 3 triệu',
    },
    {
        code: 4,
        name: 'Từ 3 - 5 triệu',
    },
    {
        code: 5,
        name: 'Từ 5 - 7 triệu',
    },
    {
        code: 6,
        name: 'Từ 7 - 10 triệu',
    },
    {
        code: 7,
        name: 'Từ 10 - 15 triệu',
    },
    {
        code: 8,
        name: 'Trên 15 triệu',
    },
];

export const filterAre = [
    {
        code: 1,
        name: 'Dưới 20 m2',
    },
    {
        code: 2,
        name: 'Từ 20 - 30 m2',
    },
    {
        code: 3,
        name: 'Từ 30 - 50 m2',
    },
    {
        code: 4,
        name: 'Từ 50 - 70 m2',
    },
    {
        code: 5,
        name: 'Từ 70 - 90 m2',
    },
    {
        code: 6,
        name: 'Trên 90 m2',
    },
];

export const categorySidebar = [
    {
        id: 1,
        name: 'Cho thuê phòng trọ',
    },
    {
        id: 2,
        name: 'Cho thuê nhà nguyên căn',
    },
    {
        id: 3,
        name: 'Cho thuê căn hộ',
        subItem: [
            { id: 1, name: 'Cho thuê căn hộ mini' },
            { id: 2, name: 'Cho thuê căn hộ dịch vụ' },
        ],
    },
    {
        id: 4,
        name: 'Cho thuê mặt bằng',
    },
    {
        id: 5,
        name: 'Tìm người ở ghép',
    },
];
