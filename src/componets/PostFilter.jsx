import React from 'react';
import Select from "../UI/Select/Select";
import Input from "../UI/Input/Input";

const PostFilter = ({posts, filter, setFilter}) => {

    return (
        <div className="post-filter">
            <Input
                placeholder="Search..."
                value={filter.query}
                onChange={e => setFilter(prev => ({...prev, query: e.target.value}))}
            />

            <Select
                value={filter.sort}
                onChange={selectedSort => setFilter(prev => ({...prev, sort: selectedSort}))}
                defaultValue={"Sort by"}
                options={[
                    { id: 1, name: 'By name', value: 'title' },
                    { id: 2, name: 'By description', value: 'body' }
                ]}
            />
        </div>
    );
};

export default React.memo(PostFilter);
