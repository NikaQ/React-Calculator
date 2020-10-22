import React from 'react';
import '../style/App.css';
import ExtraButtons from './ExtraButtons'
import Numbers from './Numbers'
import Operators from './Operators'

function App() {
  return (
    <div className="App">
      <div className="FlexContainer">
        <div className="ExtraButtons">
          <ExtraButtons />
        </div>
        <div className="Numbers">
          <Numbers />
        </div>
      </div>
      <div className="Operators">
          <Operators />
      </div>  
    </div>
  
  );
}

export default App;
