import './App.css'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [ans, setAns] = useState(false)
  const [res, setRes] = useState('0')

  Array.prototype.clean = function(deleteValue) {
    return this.filter((element) => {
      return element !== deleteValue;
    });
  };

  const arr = res.trim().split(' ').clean('')
  const lastI = arr[arr.length-1]
  const alastI = arr[arr.length-2]

  const resolve = () =>{
    if(!isNaN(lastI)){
      setRes(evaluate(res).toString())
      setAns(true)
    }
  }
  const clear = () =>{
  setRes('0')
  setAns(false)
  }

  const addN = (n) =>{
  let num = n.target.textContent
  if(ans){
    setRes(num)
    setAns(false)
  }else{
    res === '0' ? setRes(num) : setRes(res + num)
  }
  }

  const addF = (f) =>{
    let fun = f.target.textContent
    if(ans) setAns(false)
    
    if(fun === '-'){
      if(alastI === undefined){
        if(!isNaN(lastI)){
          setRes(res + ' ' + fun + ' ')
        }
      }else{
        if(lastI === '-' && !isNaN(alastI)){
          setRes(res + ' ' + fun + ' ')
        }else if(lastI !== '-' && alastI !== '-'){
          setRes(res + ' ' + fun + ' ')
        }
      }
    }else{
      if(alastI === undefined){
        if(!isNaN(lastI)){
          setRes(res + ' ' + fun + ' ')
        }
      }else{
        if(isNaN(lastI) && !isNaN(alastI)){
          setRes(arr.slice(0,-1).join(' ') + ' ' + fun + ' ')
        }else if(isNaN(lastI) && isNaN(alastI)){
          setRes(arr.slice(0,-2).join(' ') + ' ' + fun + ' ')
        }else{
          setRes(res + ' ' + fun + ' ')
        }
      }
    }
  }

  const addDec = () =>{
    if(!lastI.includes('.')){
        setRes(res  + '.' )
    }

}
  return (
    <div className="div">
      <div className='calc'>
        <div className='display'>
          <span className='res' id='display'>{res}</span>
        </div>
        <div className='btns'>
          <button className='nums' id="one" onClick={addN}>1</button>
          <button className='nums' id="two" onClick={addN}>2</button>
          <button className='nums' id="three" onClick={addN}>3</button>
          <button className='ops' id="add" onClick={addF}>+</button>

          <button className='nums' id="four" onClick={addN}>4</button>
          <button className='nums' id="five" onClick={addN}>5</button>
          <button className='nums' id="six" onClick={addN}>6</button>
          <button className='ops' id="subtract" onClick={addF}>-</button>

          <button className='nums' id="seven" onClick={addN}>7</button>
          <button className='nums' id="eight" onClick={addN}>8</button>
          <button className='nums' id="nine" onClick={addN}>9</button>
          <button className='ops' id="multiply" onClick={addF}>*</button>

          <button className='dec' id="decimal" onClick={addDec}>.</button>
          <button className='nums' id="zero" onClick={addN}>0</button>
          <button className='clear' id="clear" onClick={clear}>AC</button>
          <button className='ops' id="divide" onClick={addF}>/</button>

          <button className='equal' id="equals" onClick={resolve}>=</button>
        </div>
      </div>
        <a  rel="noreferrer" href='https://www.linkedin.com/in/sotopaguayj/' target='_blank' className='me'>@SOTOPAGUAYJ</a>
    </div>
  );
}

export default App;
