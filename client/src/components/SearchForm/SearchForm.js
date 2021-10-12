import React, {useEffect, useRef} from 'react';
import './SearchForm.scss';
import {dictionary} from './../../data/dictionary';

const SearchForm = ({searchValue, setSearchValue, language}) => {

    const searchInputRef = useRef();

    useEffect(()=> {
        searchInputRef.current.focus();
    }, []);

    return (
        <form className="form-inline my-2 my-lg-0 search-form">
            <input ref={searchInputRef} className="form-control mr-sm-2 search_input" type="text" placeholder={dictionary[language]['search-country']} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <i className="fa fa-times delete-input" onClick={() => setSearchValue('')}> </i>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">{dictionary[language]['search']}</button>
        </form>
    )

}

export default SearchForm;
