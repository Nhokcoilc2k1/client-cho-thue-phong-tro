import { useMemo } from 'react';
import { generateRange } from '../untils/helps';

const usePagination = (totalCount, currentPage, siblingCount = 1) => {
    const paginationArray = useMemo(() => {
        const pageSize = process.env.REACT_APP_LIMIT_PRODUCT || 10;
        const paginationCount = Math.ceil(totalCount / pageSize);
        const totalPaginationItem = siblingCount + 5;

        if (paginationCount <= totalPaginationItem) return generateRange(1, paginationCount);
        const isShowLeft = currentPage - siblingCount > 2;
        const isShowRight = currentPage + siblingCount < paginationCount - 2;

        if (isShowLeft && !isShowRight) {
            const rightStart = paginationCount - 4;
            const rightRange = generateRange(rightStart, paginationCount);
            return [1, '...', ...rightRange];
        }

        if (!isShowLeft && isShowRight) {
            const leftRange = generateRange(1, 5);
            return [...leftRange, '...', paginationCount];
        }

        const siblingLeft = Math.max(currentPage - siblingCount, 1);
        const siblingRight = Math.min(currentPage + siblingCount, paginationCount);

        if (isShowLeft && isShowRight) {
            const middleRange = generateRange(siblingLeft, siblingRight);
            return [1, '...', ...middleRange, '...', paginationCount];
        }
    }, [totalCount, currentPage, siblingCount]);
    return paginationArray;
};

export default usePagination;
// firt(trang đầu) + last(trang cuối) + current(Trang hiện tại) + sibling(trang liền kề trang hiện tại) + 3*DOT(dấu chấm)
// min = 6 -> sibling = 5
// totalCount: 58, limitProduct = 10 ->58/10 5.8 ~ 6 = 6(page)
// totalPaginationItem(số item hiển thị (1,2,3,4,5,6)) : sibling + 5 = 6
// sibling = 1

//[1,2,3,4,5,6]
//[1, ...,6,7,8,9,10]
//[1,2,3,4,5,...,10]
//[1, ...,5,6,7,...,10]
