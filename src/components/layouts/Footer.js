import './Footer.css'
import {Link} from 'react-router-dom';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        <div className='footer'>
                 <div><span>Desenvolvido por Amikel Maxi</span></div>
            <ul className='menu_footer'>
                <li className='item_footer'><FaFacebook /></li>
                <li className='item_footer'><FaTwitter /></li>
                <li className='item_footer'><FaInstagram /></li>
                <li className='item_footer'><FaYoutube /></li>
                <li className='item_footer'><FaLinkedin /></li> 
            </ul>
           
        </div>
    );
}
export default Footer;