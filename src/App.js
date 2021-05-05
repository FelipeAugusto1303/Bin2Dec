import React from 'react';
import './App.css';



const App = () => {
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const enterBin = (event) => {
    const data = event.target.value
    console.log(data)
    
    if(data[data.length -1] === "0" || data[data.length -1] === "1" || data[data.length -1] === ""){
      setValue(data)
      setResult(convertBin2Dec(data))
    }
    else{
      alert("valor invalido, coloque apenas 0 ou 1 !!!!");
    }
    
  };

  const convertBin2Dec = (value) => {
    var temp = 0
    value.split("").forEach((element, index) => {
      console.log(element, index)
      temp = temp + Math.pow(2, element * (value.length -1 - index))
    });
    return temp;
  }

  return(
    <div>
      <h1>BIN2DEC</h1>
      
      <input
        type="text" 
        value={value}
        onChange={enterBin}
        maxLength="8"/>
      
      <p>{result}</p>
        
    </div>
  )
}

export default App;