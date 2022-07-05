import { useState, useEffect } from 'react'
import React from 'react'

import './Form.css'

import Input from './Input'
import Select from './Secetc'
import SubmitBtn from './SubmitBtn'

function Form({btnLabel}){
    const [categorias, setCategorias] = useState([]);

    useEffect(() =>{
            fetch("http://localhost:5000/categorias",{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
        })
        .catch((err) => console.log(err))

    },[])

    return(
        <div>
            <form className="form">
                <Input 
                    type="text"
                    name="name"
                    text="Project name"
                    placeholder="Fill the project name"
                />
                <Input 
                    type="numeric"
                    name="price"
                    text="Project cost"
                    placeholder="Fill the project price"
                />
                <Input 
                    type="text"
                    name="owner"
                    text="Project owner name"
                    placeholder="Fill the project owner name"
                />
                <Select name="category_id" text="Select the project category" options={categorias}/>
                <SubmitBtn text={btnLabel} />
            </form>
        </div>
    );
}
export default Form;