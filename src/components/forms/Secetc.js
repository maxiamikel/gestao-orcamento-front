import './Select.css'
function Select({text,name,options,handleOneChange,value}){
    return(
        <div className="control_form ">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Select an option</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.nome}
                    </option>
                ))}
            </select>
        </div>
    )
   
} 
export default Select;