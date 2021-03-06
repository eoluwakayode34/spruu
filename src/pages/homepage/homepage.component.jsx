import React from 'react';
import './homepage.style.scss';
import {ReactComponent as Search} from '../../asset/search.svg'
import AutoComplete from '../../component/auto-complete/auto-complete.component';

const Homepage = () => (
    <div className="container">
        <div className="showcase">
            <h1 className='showcase-title' >SPRUU REVIEW</h1>
            <p className='showcase-subtitle' >Research, Rate and Review Lecturers and Schools in Nigeria</p>
            <form action="" className='form-search' >

                <AutoComplete type="search" placeholder='Search for lecturer or school' className='search' />
                
                <Search className='search-icon' />
                
            </form>
        </div>
    </div>

);

export default Homepage;
