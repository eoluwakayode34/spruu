import React from 'react';
import Filler from './Filler/filler.component';
import './progress-bar.style.scss';

const ProgressBar = (props) => {
    return(
        <div className="progress-bar">
            <Filler  percentage={props.percentage} />
        </div>
    )
}

export default ProgressBar;