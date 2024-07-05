import { getNumberPrice } from './getNumber';

export const getCodePrice = (totals) => {
    return totals.map((item) => {
        let arrMaxMin = getNumberPrice(item.name);
        if (arrMaxMin.length === 1) arrMaxMin.push(0);
        arrMaxMin.sort();
        return {
            ...item,
            min:
                +arrMaxMin[0] === 0 && +arrMaxMin[1] === 15
                    ? 15
                    : +arrMaxMin[0] === 0 && +arrMaxMin[1] === 90
                    ? 90
                    : +arrMaxMin[0],
            max:
                +arrMaxMin[0] === 0 && +arrMaxMin[1] === 15
                    ? 9999
                    : +arrMaxMin[0] === 0 && +arrMaxMin[1] === 90
                    ? 9999
                    : +arrMaxMin[1],
        };
    });
};

export const getCodes = (arrMinMax, arr) => {
    const priceWithMinMax = getCodePrice(arr);
    return priceWithMinMax.filter(
        (item) =>
            (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
            (item.max >= arrMinMax[0] && item.max <= arrMinMax[1]),
    );
};
