import {useNavigate} from 'react-router-dom'

import './NewProject.css'
import Form from '../../forms/Form'
function NewProject(){

    const navigate = useNavigate();

    function createPost(project){
        project.services = []
        project.preco = 0

        fetch('http://www.localhost:5000/projets',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className='newproj_container'>
             <h1>New Project</h1>
             <p>Create your new projet. After, you can add ours services</p>
             <Form  handleSubmit={createPost} btnLabel="Create New Project" />
        </div>
       
    );
}
export default NewProject ;