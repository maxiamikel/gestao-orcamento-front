import React from 'react'
import './Form.css'
import Input from './Input'
import Select from './Secetc'
import SubmitBtn from './SubmitBtn'
function Form({btnLabel}){
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
                <Select name="category_id" text="Select the project category"/>
                <SubmitBtn text={btnLabel} />
            </form>
        </div>
    );
}
export default Form;