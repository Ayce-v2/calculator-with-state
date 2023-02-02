import React, { useState } from "react";


export function InputFields(){

    const [value, setValue] = useState({
        value1: 0,
        value2: 0,
        result: 0,
        
    });


    const [total, setTotal] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);

    function handleTotal(event: React.ChangeEvent<HTMLInputElement>) {
        setTotal(event.target.innerText);
        console.log(total)
    }
    
    function handleHistory(operation:string) {
        const historyClone = [...history];
        const historyItem = `${value.value1} ${operation} ${value.value2} = ${value.result}`
        historyClone.push(historyItem);
        setHistory(historyClone);
    }

    function handleValue1(event: React.ChangeEvent<HTMLInputElement>){
        const num:number = Number(event.target.value);
        const numClone = {...value};
        numClone.value1 = num;
        setValue(numClone);

    }

    function handleValue2(event: React.ChangeEvent<HTMLInputElement>){
        const num:number = Number(event.target.value);
        const numClone = {...value};
        numClone.value2 = num;
        setValue(numClone);
    }

    function handleAdditon(){
        const sum = value.value1 + value.value2;
        const stateClone = {...value};
        stateClone.result = sum;
        handleHistory('+')
        setValue(stateClone);
    }

    function handleSubtraction(){
        const sum = value.value1 - value.value2;
        const stateClone = {...value};
        stateClone.result = sum;
        handleHistory('-')
        setValue(stateClone);
    }

    function handleMultiplication(){
        const sum = value.value1 * value.value2;
        const stateClone = {...value};
        stateClone.result = sum;
        handleHistory('*')
        setValue(stateClone);
    }

    function handleDivision(){
        const sum = value.value1 / value.value2;
        const stateClone = {...value};
        stateClone.result = sum;
        handleHistory('÷')
        setValue(stateClone);
    }

    


    return <>
        <label htmlFor="value1">First Value</label>
        <input id="value1" type="text" placeholder="number" onChange={handleValue1}/>

        <label htmlFor="value2">Second Value</label>
        <input id="value2" type="text" placeholder="number" onChange={handleValue2}/>

        <h3>Inserted values : {value.value1}, {value.value2}</h3>
        <h3 onChange={handleTotal}>Result: {value.result}</h3>

        <button onClick={handleAdditon}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>÷</button>

        {/* <button onClick={handleHistory}> Add history</button> */}
    
    <ul>
        {history.map(h => <li>{h}</li>)}
    </ul>
    
        

        
        
    </>
}

// {value === "" ? <p>No value entered</p> : <h3>{value1}</h3> }