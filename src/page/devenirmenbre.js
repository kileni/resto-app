import React  from 'react';
import ReactDOM from 'react-dom'


class Devenirmenber extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section class="section pt-5 pb-5 bg-white becomemember-section border-bottom">
                <div class="container">
                <div class="section-header text-center white-text">
                <h2>Become a Member</h2>
                <p>Lorem Ipsum is simply dummy text of</p>
                <span class="line"></span>
                </div>
                <div class="row">
                <div class="col-sm-12 text-center">
                <a href="register.html" class="btn btn-success btn-lg">
                Create an Account <i class="fa fa-chevron-circle-right"></i>
                </a>
                </div>
                </div>
                </div>
                </section>
                <section class="section pt-5 pb-5 text-center bg-white">
                    <div class="container">
                    <div class="row">
                    <div class="col-sm-12">
                    <h5 class="m-0">Operate food store or restaurants? <a href="login.html">Work With Us</a></h5>
                    </div>
                    </div>
                    </div>
                    </section>
                   </div>
         );
    }
}
 
export default Devenirmenber;