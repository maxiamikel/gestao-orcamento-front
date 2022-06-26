import React from 'react'
import './Container.modules.css';
function Container(props){
   
    return(
        <div className='main'> {props.children} </div>
    );
}
export default Container;