import './NewProject.css'
import Form from '../../forms/Form'
function NewProject(){
    return(
        <div className='newproj_container'>
             <h1>New Project</h1>
             <p>Create your new projet. After, you can add ours services</p>
             <Form  btnLabel="Create New Project" />
        </div>
       
    );
}
export default NewProject ;