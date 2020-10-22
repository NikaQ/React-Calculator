import React from 'react'

const ExtraButtons = ({handleClearClick, handleRemoveClick}) => {
    return (
        <div className="ExtraButtons">
          <p onClick={handleClearClick} className="Block">C</p>
          <p onClick={handleRemoveClick} className="Block">X</p>
          <p className="Block">%</p>
        </div>
    )
}

export default ExtraButtons
