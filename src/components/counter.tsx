import {useState} from 'react';

export const Counter = () => {
    const [counts, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(c => c+1)}>Counts {counts}</button>
        </div>
    )
}