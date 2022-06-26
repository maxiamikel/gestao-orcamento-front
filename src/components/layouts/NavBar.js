import { Link} from 'react-router-dom';
import './NavBar.css'

import {FaAcquisitionsIncorporated} from 'react-icons/fa';
function NavBar(){
    return(
        <div className='header'>
             <FaAcquisitionsIncorporated className='logo'/>
            <ul className='menu'>
                <li className='item'><Link to="/">Home</Link></li>
                <li className='item'><Link to="/NewProject">Projetos</Link></li>
                <li className='item'><Link to="/Repports">Repport</Link></li>
            </ul>
        </div>
    );
}
export default NavBar