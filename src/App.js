
import { Link, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './components/pages/home/Home'
import NewProject from './components/pages/newProjet/NewProject';
import Repports from './components/pages/repports/Repports';
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer'
import NavBar from './components/layouts/NavBar'
function App() {
  return(
    <div > 
      <router>
        <NavBar />
        
        <Container className='main'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/NewProject" element={<NewProject />} />
            <Route exact path="/Repports" element={ <Repports /> } />
          </Routes>
        </Container>

      </router>
      <div>
        <Footer />
      </div>
    
    </div>
  );

  
}

export default App;
