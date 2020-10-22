import React from 'react'

const Operators = ({operators, handleOperatorClick}) => {    
    return (
      <div className="Operators">
        {operators.map(operator=><p key={operator} onClick={()=>handleOperatorClick(operator)} className="Block">{operator}</p>)}
      </div>
    )
}

export default Operators
