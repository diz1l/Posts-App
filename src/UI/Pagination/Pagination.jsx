import React from 'react';
import classes from './Pagination.module.css';
import {usePagination} from "../../hooks/usePagination";

const Pagination = ({page, totalPages, changePage}) => {
    const pagesArray = usePagination(totalPages);

    return (
        <div className={classes.pagination}>
            {pagesArray.map((p) => (
                <span
                    key={p}
                    className={page === p ? `${classes.page} ${classes.page__current}` : classes.page}
                    onClick={() => changePage(p)}
                >
                    {p}
                </span>
            ))}
        </div>
    );
};

export default Pagination;
