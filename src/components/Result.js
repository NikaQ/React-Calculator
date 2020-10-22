import React from 'react'
import '../style/Result.css';

const Result = ({result}) => {
    result = result === "0" ? "" : "="+result;
    return (
        <div className="Result">
        <p>{result}</p>
        </div>
    )
}

export default Result
