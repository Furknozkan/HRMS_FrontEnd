
import './App.css';
import Dashboard from './layouts/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';

import Slider from './layouts/Slider';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">

      
      <Navi />
      <Slider />
      <Container className="main">
        <Dashboard />
        
      </Container>
      
      <Footer />
      
      </div>
      
      
      
    </div>
  );
}

export default App;
