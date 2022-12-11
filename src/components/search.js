import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({handleSearchNote}) => {

    const searchCtrl = (event) => {
        handleSearchNote(event.target.value);
    }

    return(
        <div className="search">
            <MdSearch className="search-icons" size="1.3em"/>
            <input 
                type="text"
                placeholder="Search your note..."
                onChange={searchCtrl}
            />
        </div>
    );


}


export default Search;