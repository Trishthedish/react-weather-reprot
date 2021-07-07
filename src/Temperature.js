import './Temperature.css';
import { useState } from 'react';

const Temperature = () => {
    const [tempCount, setTempCount] = useState(0);
    
    const increaseTemperature = () => {
        setTempCount(tempCount + 1);

    }
    const decreaseTemperature = () => {
        setTempCount(tempCount - 1);

    }

    return (
        <section>
            <h1 className="center">Temperature</h1>
            <p className="center">{tempCount}</p>
            <div className="center">
                <button onClick={increaseTemperature}>➕</button>
                <button onClick={decreaseTemperature}>➖</button>
            </div>
        </section>
    )
}

export default Temperature;