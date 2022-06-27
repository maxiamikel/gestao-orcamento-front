import {FaAcquisitionsIncorporated} from 'react-icons/fa'
import LinkButton from '../../layouts/LinkButton'
import './Home.css'
function Home(){
    return(
        <div className="home_container">
            <h1>Welcome to <span className="home_title_container"><span className="home_title1">Proje</span><span className="home_title">Max</span></span></h1>
            <p>The way to create and manage your projets quicklly by using only 1,2,3 steps</p>
            <LinkButton className="home_button" to="/NewProject" text="New Projet" />
            <FaAcquisitionsIncorporated className="logoHome" />
        
        </div>
    );
}
export default Home