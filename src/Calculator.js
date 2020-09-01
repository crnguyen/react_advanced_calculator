import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [num1, setNum1] = useState(" ")
    let [num2, setNum2] = useState(" ")
    let [operator, setOperator] = useState()

    const clearCalc = () => {
        console.log("clearing")
        setNum1(" ")
        setNum2(" ")
        setOperator()
    }

    const handleNums = (e)=>{
        e.preventDefault()
        if(String(num1).charAt(0) === "0"){
            setNum1(e.target.value)
        } else {
            !operator ? setNum1(num1 + e.target.value) : setNum2(num2 + e.target.value)
        }
    }

    const solve =()=>{
        if(!num1){
            console.log("nope")
        } else if (!operator){
            setNum1(Number(num1).toFixed(1))
        } else if (operator === "+"){
            setNum1((Number(num1) + Number(num2)))
        } else if (operator === "-"){
            setNum1((Number(num1) - Number(num2)))
        } else if (operator === "/"){
            setNum1((Number(num1) / Number(num2)).toFixed(1))
        } else if (operator === "*"){
            setNum1((Number(num1) * Number(num2)).toFixed(1))
        } else if (operator === "%"){
            setNum1((Number(num1) % Number(num2)))
        }
        setNum2(" ")
        setOperator()
    }

    const handleOps = (e) => {
        if(num1 && operator && num2) {
            setNum2(" ")
            setOperator(e.target.value)
        } else if (num1 === " "){
            console.log("nice try buddy")
        } else {
            setOperator(e.target.value)
        }
    }

    const handleZero =(e) => {
        console.log("you hit a zero")
        if (num1 && operator && num2 === " "){
            setNum2(e.target.value + ".")
        } else if (num1 !== " " && num2 !== " "){
            setNum2(num2 + e.target.value)
        } else if (num1 === " "){
            setNum1(e.target.value + ".")
        } else if (num1 !== " "){
            setNum1(num1 + e.target.value)
        } else {
            setNum2(num2 + e.target.value)
        }
    }

    const handleDot = (e) => {
        if(num1 === " "){
            setNum1("0" + e.target.value)
        } else if (num1 !== " " && num1.includes(".") === false){
            setNum1(num1 + e.target.value)
        } else if (num1 && operator && num2){
            setNum2("0" + e.target.value)
        } else if (num1 && operator && num2.includes(".") === false){
            setNum2(num2 + e.target.value)
        } else {
            console.log("how many numbers can a negative have?")
        }
    }

    const handleNegative = () => {
        num1 === " " ? console.log("nah") : setNum1(Number(num1) * (-1))
    }

    return (
        <div className="container">
            <div className="calc-container">
                <h1>React Calculator</h1>
                <div className="answer-box">{num1}{operator}{num2}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearCalc}>AC</button>
                    <button className="calc-button calc-button-top" onClick={handleNegative}>+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={handleOps}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={handleOps}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={handleNums}>7</button>
                    <button className="calc-button" value="8" onClick={handleNums}>8</button>
                    <button className="calc-button" value="9" onClick={handleNums}>9</button>
                    <button className="calc-button calc-button-op" value="*" onClick={handleOps}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={handleNums}>4</button>
                    <button className="calc-button" value="5" onClick={handleNums}>5</button>
                    <button className="calc-button" value="6" onClick={handleNums}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={handleOps}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={handleNums}>1</button>
                    <button className="calc-button" value="2" onClick={handleNums}>2</button>
                    <button className="calc-button" value="3" onClick={handleNums}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={handleOps}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0" onClick={handleZero}>0</button>
                    <button className="calc-button" value="." onClick={handleDot}>.</button>
                    <button className="calc-button calc-button-op" onClick={solve}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator