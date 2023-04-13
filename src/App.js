import './App.css';
import Header from './Header'
import Services from './Services'
import About from './About'
import Whyus from './Whyus';
import Contactus from './Contactus';
import Footers from './Footers';

function App() {
  return (
        <div className="App">
          
            <Header/>
            <Services />
            <About />
            <Whyus/>
            <Contactus/>
            <Footers />
       
        </div> 
  );
}

export default App;
