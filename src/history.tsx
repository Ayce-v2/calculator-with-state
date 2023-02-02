import { useState } from "react"


export function HistoryList() {

    const [total, setTotal] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);

    function handleTotal(event: React.ChangeEvent<HTMLHeadingElement>) {
        setTotal(event.target.innerText);
    }
    
    function handleHistory() {
        const historyClone = [...history];
        historyClone.push(total);
        setHistory(historyClone);
    }


    return <>
    <button onClick={handleHistory}> Add history</button>
    
    <ul>
        {history.map(h => <li>{h}</li>)}
    </ul>
    
    </>
}