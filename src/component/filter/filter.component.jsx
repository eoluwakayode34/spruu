import React from 'react'
import './filter.styled.scss'

const Filter = () => {

    return (
        <>

        <div className="filter-group">
        <select className='filter' name="overall-quality" id="" >
        <option className='filter-option' >Overall Quality</option>  
        <option className='filter-option' >1 Star</option>   
        <option className='filter-option' >2 Star</option>   
        <option className='filter-option' >3 Star</option>           
        <option className='filter-option' >4 Star</option>   
        <option className='filter-option' >5 Star</option>   
        </select>

        <select className='filter' name="date" id="" >
        <option>Date</option>          
        </select>

        <select className='filter' name="difficulty" id="" >
        <option>Difficulty</option>  
        <option>Very Easy</option>  
        <option>Easy</option>          
        <option>Neutral</option>  
        <option>Difficult</option> 
        <option>Very Difficult</option> 

         
        </select>

        <select className='filter' name="would take again" id="" >
        <option>Would Take Again</option>
        <option>Yes</option>
        <option>No</option>          
        </select>
        </div>
       

        </>
    )

}


export default Filter;