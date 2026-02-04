import {useMemo} from "react";

export const usePagination = (totalPages) => {
    const pagesArray = useMemo(() => {
        const item = [];
        for (let i = 0; i < totalPages; i++) {
            item.push(i + 1);
        }
        return item;
    }, [totalPages]);

    return pagesArray;
}