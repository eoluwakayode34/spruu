import React from 'react';
import {checkbox, collapse} from 'antd';
const {Panel} = collapse
const reviewFilter = [
    {
        "_id": 1,
        "name": "onestar"
    },
    {
        "_id": 2,
        "name": "twostar"
    },
    {
        "_id": 3,
        "name": "threestar"
    },
    {
        "_id": 4,
        "name": "fourstar"
    },
    {
        "_id": 5,
        "name": "fivestar"
    },
]

function CheckBox(){
   return(
       <div>
        <collapse defaultActiveKey={['0']}>
            <Panel header key='1'>
            {reviewFilter.map((value, index) => (
                <React.Fragment key={value}>
                    <checkbox
                    onchange
                    type='checkbox'
                    checked
                    />
                    <span>{value.name}</span>

                </React.Fragment>
            ))}
            </Panel>
        </collapse>
       </div>
   ) 
}

export default CheckBox
