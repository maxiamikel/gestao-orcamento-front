import './Input.css'
function Input({type,text,name,placeholder,handleOneChange,value}){
    return(
        <div className="control_form ">
            <label htmlFor={name}>{text}:</label>
            <input type={type} placeholder={placeholder} name={name} onchange={handleOneChange} id={name} value={value} />
        </div>
    )
   
} 
export default Input;