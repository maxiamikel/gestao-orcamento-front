import im1 from '../../../images/book1.png'
import './Home.css'
function Home(){
    return(
        <div>
            <h1>Home</h1>
            <img src={im1} className='image' />
        </div>
    );
}
export default Home