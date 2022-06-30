import './Select.css'
function Select({text,name,option,handleOneChange,value}){
    return(
        <div className="control_form ">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Select an option</option>
            </select>
        </div>
    )
   
} 
export default Select;