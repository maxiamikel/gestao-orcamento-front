import { Link} from 'react-router-dom';
import './LinkButton.css';
function LinkButton({to,text}){
    return(
        <div>
            <Link className="home_button" to={to} >{text}</Link>
        </div>
    );
}
export default LinkButton;