import React, {useEffect, useRef} from 'react';
import './SearchForm.scss';

const SearchForm = ({searchValue, setSearchValue}) => {

    const searchInputRef = useRef();

    useEffect(()=> {
        searchInputRef.current.focus();
    }, []);

    return (
        <form class="form-inline my-2 my-lg-0 search-form">
            <input ref={searchInputRef} class="form-control mr-sm-2" type="text" placeholder="Search country" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            <i className="fa fa-times delete-input" onClick={() => setSearchValue('')}></i>
        </form>
    )

}

export default SearchForm;