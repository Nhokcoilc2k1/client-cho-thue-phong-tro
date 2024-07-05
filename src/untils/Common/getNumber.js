export const getNumberPrice = (string) => {
    let arr = string.split(' ');
    let output = arr.filter((item) => !isNaN(item));
    return output;
};
