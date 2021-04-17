import React, {useState} from 'react';
import './App.css';
import getComma from './components/getComma/getComma';
import Button from './components/button/button';
function App() {
  /* new state to update the result value */
  const [value, setValue] = useState("0");
  /* new state to update the value memory*/
  const [memory, setMemory] = useState(null);
  /* new state to set the operator when i click*/
  const [operator, setOperator] = useState(null);
  /* new state to set new date*/
  const [date, setDate] = useState(new Date());

  const handleButtonClick = content => () => {
    const num = parseFloat(value);

    if(content === "AC") {
      setValue("0");
      setMemory(null);
      return;
    }
    if(content === "±") {
      setValue((num * - 1).toString());
      setMemory(null);
      return;
    }
    if(content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      return;
    }

    if(content === ".") {
      if(value.includes(".")) {
        return;
      }
      setValue(num + ".");
      return;
    }

    if(content === "÷") {
      if(operator !== null) {
        if(operator === "+") {
          setMemory((memory + num));
        } else if (operator === "-") {
          setMemory((memory - num));
        } else if (operator === "x") {
          setMemory((memory * num));
        } else if (operator === "÷") {
          setMemory((memory / num));
        } else {
          setMemory(num);
        }
      }
      setValue("0");
      setOperator("÷");
      return;  
    }


        if(content === "x") {
          if(operator !== null) {
            if(operator === "+") {
              setMemory((memory + num));
            } else if (operator === "-") {
              setMemory((memory - num));
            } else if (operator === "x") {
              setMemory((memory * num));
            } else if (operator === "÷") {
              setMemory((memory / num));
            }else {
              setMemory(num);
            }
            setValue("0");
            setOperator("x");
            return;
        }
      }


      if(content === "-") {
        if(operator !== null) {
          if(operator === "+") {
            setMemory((memory + num));
          } else if (operator === "-") {
            setMemory((memory - num));
          } else if (operator === "x") {
            setMemory((memory * num));
          } else if (operator === "÷") {
            setMemory((memory / num));
          } else {
            setMemory(num);
          }
        setValue("0");
        setOperator("-");
        return;
      }
    }


    if(content === "+") {
      if(operator !== null) {
        if(operator === "+") {
          setMemory((memory + num));
        } else if (operator === "-") {
          setMemory((memory - num));
        } else if (operator === "x") {
          setMemory((memory * num));
        } else if (operator === "÷") {
          setMemory((memory / num));
        }else {
          setMemory(num);
        }
      }
      setValue("0");
      setOperator("+");
      return;
    }


    if(content === "=") {
      if(!operator) {
        return;
      }
      if(operator === "+") {
        setValue((memory + num).toString());
      } else if (operator === "-") {
        setValue((memory - num).toString());
      } else if (operator === "x") {
        setValue((memory * num).toString());
      } else if (operator === "÷") {
        setValue((memory / num).toString());
      }

      setOperator("=");
      setMemory(null);
      return;
    }

    if(value[value.length - 1] === ".") {
      setValue(value + content);
    } else{
      setValue(parseFloat(num + content).toString());
    }
  }

  return (
    <div className="App">
      <div className="topPart">
        <div className="date">{date.getHours()}:{date.getMinutes()}
        </div>
      </div>
      <div className="display">{getComma(value)}</div>
      <div className="buttons">
        <Button buttonOnClick={handleButtonClick} content="AC" type="function"></Button>
        <Button buttonOnClick={handleButtonClick} content="±" type="function"></Button>
        <Button buttonOnClick={handleButtonClick} content="%" type="function"></Button>
        <Button buttonOnClick={handleButtonClick} content="÷" type="parameter"></Button>
        <Button buttonOnClick={handleButtonClick} content="7"></Button>
        <Button buttonOnClick={handleButtonClick} content="8"></Button>
        <Button buttonOnClick={handleButtonClick} content="9"></Button>
        <Button buttonOnClick={handleButtonClick} content="x" type="parameter"></Button>
        <Button buttonOnClick={handleButtonClick} content="4"></Button>
        <Button buttonOnClick={handleButtonClick} content="5"></Button>
        <Button buttonOnClick={handleButtonClick} content="6"></Button>
        <Button buttonOnClick={handleButtonClick} content="-" type="parameter"></Button>
        <Button buttonOnClick={handleButtonClick} content="1"></Button>
        <Button buttonOnClick={handleButtonClick} content="2"></Button>
        <Button buttonOnClick={handleButtonClick} content="3"></Button>
        <Button buttonOnClick={handleButtonClick} content="+" type="parameter"></Button>
        <Button buttonOnClick={handleButtonClick} content="0"></Button>
        <Button buttonOnClick={handleButtonClick} content="."></Button>
        <Button buttonOnClick={handleButtonClick} content="=" type="parameter"></Button>
      </div>
       <div className="bottom">
         <span></span>
      </div> 
   </div>
  )
}

export default App;
