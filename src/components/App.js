import React, {useState} from 'react';
import '../style/App.css';
import ExtraButtons from './ExtraButtons'
import Numbers from './Numbers'
import Operators from './Operators'
import Result from './Result'
import Output from './Output'

function App() {
  const operators = ['/', '*', '-', '+', '=']
  const [output, setOutput] = useState('0')
  const [result, setResult] = useState('0')
  
  const numberClickHandler = number => {
    let out = output.concat(number);
    if(output === '0') {
      setOutput(number);
    }else{
      setOutput(out);
      // eslint-disable-next-line
      setResult(eval(out.replace(/[^-()\d/*+.]/g, '')))
    }
  }

  const operatorClickHandler = operator =>{
    if(operator === '='){
      
    }
    setOutput(output+operator)
  }

  const clearClickHandler = () => {
    setOutput('0')
    setResult('0')
  }

  const removeClickHandler = () => {
    if(output.length === 1){
      setOutput('0')
      setResult('0')
    }else if(output !== '0'){
      let removedOut = output.slice(0, -1);
      setOutput(removedOut)
      if(!operators.includes(removedOut[removedOut.length - 1])){
        // eslint-disable-next-line
        setResult(eval(removedOut.replace(/[^-()\d/*+.]/g, '')))
      }
    }
  }

  return (
    <div className="App">
      <Output output={output}/>
      <Result result={result}/>
      <div className="Line"></div>
      <div className="Calculator">
        <div className="FlexContainer">
            <ExtraButtons handleClearClick={clearClickHandler} handleRemoveClick={removeClickHandler} />
            <Numbers handleNumberClick={numberClickHandler} />
        </div>
        <Operators operators={operators} handleOperatorClick={operatorClickHandler}/>
      </div>
    </div>
  );
}

export default App;
