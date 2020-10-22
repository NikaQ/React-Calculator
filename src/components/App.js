import React, {useState} from 'react';
import '../style/App.css';
import ExtraButtons from './ExtraButtons'
import Numbers from './Numbers'
import Operators from './Operators'
import Result from './Result'
import Output from './Output'

function App() {
  const [output, setOutput] = useState('0')
  const [result, setResult] = useState('0')
  
  const numberClickHandler = number => {
    if(output === '0') {
      setOutput(number);
    }else{
      setOutput(output + number);
    }

    if(result === '0'){
      setResult(number);
    }else{
      setResult(result + number);
    }
    
  }

  const operatorClickHandler = operator =>{
    if(operator === '='){
      
    }
    setOutput(output+operator)
  }

  return (
    <div className="App">
      <Output output={output}/>
      <Result result={result}/>
      <div className="Line"></div>
      <div className="Calculator">
        <div className="FlexContainer">
            <ExtraButtons />
            <Numbers handleNumberClick={numberClickHandler} />
        </div>
        <Operators handleOperatorClick={operatorClickHandler}/>
      </div>
    </div>
  );
}

export default App;
