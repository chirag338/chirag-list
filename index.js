/*import React, { useState }   from 'react';*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
 
// eslint-disable-next-line no-lone-blocks
{/*function Card(props){
return (
   <div>
    <h2>{props.name}</h2>
    <img src ={props.img} alt="avatar_img"/>
   </div> 
);

}*/}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
 
 <App />,
 {/*<Card
    name = "Chirag"
    img= "IMG-20201015-WA0013-min.jpg"

 />,*/}
    </React.StrictMode>
   
);

 


 
