import './Temperature.css';
import { useState } from 'react';

const Temperature = () => {
    
    const [tempCount, setTempCount] = useState(70);

    const pickTempColor = () => {
        if (tempCount >= 90) {
            return "blinking-red"
        }
        else if (tempCount >= 80) {
            return "red";
        } else if (tempCount >= 70) {
            return "orange";
        } else if (tempCount >= 60) {
            return "yellow";
        } else if (tempCount >= 50) {
            return "green";
        } else {
            return "teal";
        }
    }

    const increaseTemperature = () => {
        setTempCount(tempCount + 1)
    }
    const decreaseTemperature = () => {
        setTempCount(tempCount - 1);
    }

    const color = pickTempColor();
    return (
        <section className="weather-box">
            <h1 className="center">Temperature</h1>
            <p className={`${color} center`}>{tempCount}°</p>
            <div className="center button-holder">
                <button onClick={increaseTemperature}>➕</button>
                <button onClick={decreaseTemperature}>➖</button>
            </div>
        </section>
    )
}

export default Temperature;