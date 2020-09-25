import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepagesearch from './page/homepagesearch'
import Homepageaddsection from './page/homepageaddsection'
import Produitselect from './page/produitselect'
import Devenirmenbre from './page/devenirmenbre'
import Home from './home';
import Navigation from './components/navigation'
import Footer from './components/footer'
import RestItem from './components/resto/restItem'
import{Router,Route} from 'react-router-dom'
class App  extends React.Component {
  
  render() { 
    return (
      
       <div className="App">
          <Router>
           <Route path="/rest-item" Component={RestItem}></Route>
              
        <Navigation />
        <Home />
       <Footer />
       </Router>
      </div>
    )
}
}
export default App ;
 