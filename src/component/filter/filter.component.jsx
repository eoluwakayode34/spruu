import React, {useState} from 'react'
import './filter.styled.scss'

const Filter = (props) => {
    const [category, setCategory] = useState({
        name: '',
        option: ''
    })
    
    const oneStar = () => {
        setCategory({
            name: 'difficulty',
            option: '1'
        })

        props.handleFilter(category.name, category.option)
        alert(category.name)
        alert(category.option)
   }

    return (
        <>

        {/* <div className="filter-group">
        <select className='filter' name="overall-quality" id="overall-rating" >
        <option className='filter-option'  >Overall Quality</option>  
        

        <option className='filter-option' 
        onChange={filterCategory}
        checked={category.option === '2'} 
        name='overall'
        >2 Star</option>  
        

        <option className='filter-option' 
        onChange={filterCategory}
        checked={category.option === '3'} 
        name='overall'>3 Star</option> 

        <option className='filter-option'
         onChange={filterCategory}
         checked={category.option === '4'} 
         name='overall' >4 Star</option> 

        <option className='filter-option' 
         onChange={filterCategory}
         checked={category.option === '5'} 
         name='overall'>5 Star</option>   
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
        <option >Yes</option>
        <option>No</option>          
        </select>
        </div> */}

        <button className='filter-option'         
        onClick={oneStar}
       >1 Star</button> 
       

        </>
    )

}


export default Filter;