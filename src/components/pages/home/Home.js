import {FaAcquisitionsIncorporated} from 'react-icons/fa'
import LinkButton from '../../layouts/LinkButton'
import './Home.css'
function Home(){
    return(
        <div className="home_container">
            <h1>Welcome to <span className="home_title_container"><span className="home_title1">Proje</span><span className="home_title">Max</span></span></h1>
            <p>Mini sistema para a melhor gestão de orçamento de projeto</p>
            <LinkButton className="home_button" to="/NewProject" text="Adicionar Novo Orçamento" />
            <FaAcquisitionsIncorporated className="logoHome" />
        
        </div>
    );
}
export default Home