export const generateRange = (start, end) => {
    const length = end + 1 - start;
    return Array.from({ length }, (_, index) => start + index);
};

//trả về kiểu [3,4,5,6] lenght = 6 + 1 -3 hàm generateRange
