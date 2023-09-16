import React, {useState} from 'react'



const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [ans, setAns] = useState(0);
    const [error, setError] = useState("");
    const [taskPerformed, setTaskPerformed] = useState(false);

    function get1num(e){
        console.log(e.target.value);
        setNum1(e.target.value);
    }
    function get2num(e){
        console.log(e.target.value);
        setNum2(e.target.value);
    }
    
    function performOperation(opert){
        if(num1 === ""){
            setError("Num 1 cannot be empty");
            setTaskPerformed(true); 
        }else if(num2 === ""){
            setError("Num 2 cannot be empty");
            setTaskPerformed(true); 
        }else{
            setError("");
            setTaskPerformed(true); 
            switch (opert) {
                
                case "plus":
                    setAns(parseInt(num1) + parseInt(num2));
                    break;
                case "minus":
                    setAns(parseInt(num1) - parseInt(num2));
                    break;
                case "multiply":
                    setAns(parseInt(num1) * parseInt(num2));
                    break;
                case "devided":
                    setAns(parseInt(num1) / parseInt(num2));
                    break;
                default:
                    break;
            }
        }
    }
        
        
     
    
  return (
    <div className='calculator'>
        <div className="section1">
            <h2>React Calculator</h2>
        </div>
        <div className="section2">
            <input type="number" placeholder='num 1' onChange={get1num}/>
        </div>
        <div className="section3">
        <input type="number" placeholder='num 2' onChange={get2num}/>
        </div>
        <div className="section4">
            <button onClick={() => performOperation("plus")}>+</button>
            <button onClick={() => performOperation("minus")}>-</button>
            <button onClick={() => performOperation("multiply")}>*</button>
            <button onClick={() => performOperation("devided")}>/</button>
            
        </div>  
        {taskPerformed && (
                <div className="section5">
                    {error ? (
                        <div className='error'>
                            <p style={{color:"red"}}>Error</p>
                            <p className="error">{error}</p>
                        </div>
                    ) : (
                        <div className='success'>
                            <p style={{color:"blue"}}>Success!</p>
                            <p style={{ fontWeight: "900" }}>Result: {ans.toFixed(2)}</p>
                        </div>
                    )}
                </div>
            )}
                
                
                
    </div>
  )
}

export default Calculator