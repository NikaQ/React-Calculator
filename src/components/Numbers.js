import React from 'react'

const Numbers = ({handleNumberClick}) => {

    
    const numbers = [
            ['7','8','9'],
            ['4','5','6'],
            ['1','2','3'],
            ['.','0']
        ]

    let divClassName = "Row"
    return (
        <div className="Numbers">
        {numbers.map( (nums, index) =>{
            divClassName =  index === 3 ? "RowReverse" : "Row" 
            return <div key={index} className={divClassName}>
                {nums.map(num=><p key={num} className="Block" onClick={()=>handleNumberClick(num)}>{num}</p>)}
            </div>
        })}
        </div>
    )
}

export default Numbers
