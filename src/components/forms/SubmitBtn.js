import './SubmitBtn.css'
function SubmitBtn({text}){
    return(
        <div className="control_form ">
            <button className="btn">{text}</button>
        </div>
    )
   
} 
export default SubmitBtn;