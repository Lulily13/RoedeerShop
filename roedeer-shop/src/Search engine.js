import React, {useState} from 'react'


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();

    }
    return (
        <div className="search">
            <input type="search" placeholder="Wyszukaj" onChange={handleChange} value={searchInput}/>
        </div>
    )
};

export default SearchBar;