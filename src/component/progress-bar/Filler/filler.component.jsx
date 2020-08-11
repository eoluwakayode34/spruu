import React from 'react';
import './filler.style.scss'

const Filler = (props) => {
    return <div className="filler" style={{width: `${props.percentage}%`}} />
}

export default Filler   ;