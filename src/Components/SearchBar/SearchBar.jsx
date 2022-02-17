import React, { useState } from "react";
import "./style.css"


const SearchBar = (props) => {

    const [searchTerm, setSearchTerm] = useState('')


    function handleSubmit(formEvent){
        formEvent.preventDefault();
        props.filterCourses(searchTerm)
    }

    return (
        <form class='center' onSubmit={handleSubmit}>
            <label>Search Course</label>
            <input type='text' placeholder="Search Course by Zip " onChange={event => {setSearchTerm(event.target.value);}}/>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;