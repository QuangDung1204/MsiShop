import React, { useState } from 'react';
import './SearchBar.css';
import { SearchOutlined } from '@mui/icons-material';

const SearchBar = () => {
    const [value, setValue] = useState('');

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Bạn cần tìm gì?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span className="icon">
                <SearchOutlined />
            </span>
        </div>
    );
};

export default SearchBar;
