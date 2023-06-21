
import React, { useState }  from 'react';
 
// eslint-disable-next-line no-lone-blocks
{/*import Header from "./Header";
import Footer from "./Footer";
{/*import Note from './Note'; 
import notes  from './notes';*/}

 

function App() {

  /*const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1);
  }
  

  function decrease(){
    setCount(count-1);
  }*/

/*  const[headingtext , setHeadingtext] = useState("");
  const[isMousedOver , setMouseOver] = useState(false);
  const[name, setName] = useState("");
  
  function handleClick(){
    setHeadingtext(name)
  }
  function handleChange(event){
     
     
    setName(event.target.value)
  }

  function handleMouseover(){
    setMouseOver(true);
  }
  function handleMOuseOut(){
    setMouseOver(false);
  }*/

  const [inputtext , setInputtext] = useState("");
  const [item , setitem] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputtext(newValue);
  }

  function addItem(){
    setitem (prevItem => {return [...prevItem, inputtext]});
    setInputtext("");
  }

  return (
    <div className="container">
    <div className='heading'>
    <h1>To-do list</h1>
    </div>
   <div className='form'>
   <input onChange={handleChange} type="text"  value={inputtext} />
   <button  
    onClick={addItem}
     
  >
   <span>Add</span>

  </button>
   </div>
  <div>
    <ul>
      {item.map(todoitem=>(<li>{todoitem}</li>))}
    </ul>
  </div>
 
    
    
       
      
    </div>
  );
} 


 

export default App;
