import React, {Component } from 'react'
import ReactDOM from "react-dom";
import Homepagesearch from './page/homepagesearch'
import Homepageaddsection from './page/homepageaddsection'
import Produitselect from './page/produitselect'
import Devenirmenbre from './page/devenirmenbre'
import RestItem from './components/resto/restItem'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Home extends Component {
   
    render() { 
        return (  
            <div>
                      
        <Homepagesearch />
        <Produitselect />
        </div>
        );
    }
}
 
export default Home;
  