import {
    useState,
    useRef
  } from "react"; 
  import "./calculator.css";
  
  function Calculator() { 
    const inputRef = useRef(null); 
   // const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
      
    }; 
   
    function minus(e) { 
        e.preventDefault(); 
      setResult((result) => result - Number(inputRef.current.value)); 
    };
   
    function times(e) { 
        e.preventDefault(); 
        setResult((result) => result * Number(inputRef.current.value)); 
    }; 
   
    function divide(e) { 
        e.preventDefault(); 
        setResult((result) => result / Number(inputRef.current.value)); 
    };
   
    function resetInput(e) { 
        e.preventDefault(); 
     setResult(inputRef.current.value=0)
    }; 
   
    function resetResult(e) { 
     setResult(inputRef.current.value*0)
    }; 
   
    return ( 
      <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p> 
           {result}
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>minus</button> 
          <button onClick={times}>add</button> 
          <button onClick={divide}>divide</button> 
          <button onClick={resetInput}>resetInput</button> 
          <button onClick={resetResult}>resetInput</button> 
        
        </form> 
      </div> 
    ); 
  } 
   
  export default Calculator; 
  