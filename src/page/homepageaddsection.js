import React from 'react';

class Homepageaddsection extends React.Component {
   
    render() { 
        return (

            <section class="section pt-5 pb-5 bg-white homepage-add-section">
            <div class="container">
            <div class="row">
            <div class="col-md-3 col-6">
            <div class="products-box">
            <a href="listing.html"><img alt="" src="assets/img/pro1.jpg" class="img-fluid rounded"/></a>
            </div>
            </div>
            <div class="col-md-3 col-6">
            <div class="products-box">
            <a href="listing.html"><img alt="" src="assets/img/pro2.jpg" class="img-fluid rounded"/></a>
            </div>
            </div>
            <div class="col-md-3 col-6">
            <div class="products-box">
            <a href="listing.html"><img alt="" src="assets/img/pro3.jpg" class="img-fluid rounded"/></a>
            </div>
            </div>
            <div class="col-md-3 col-6">
            <div class="products-box">
            <a href="listing.html"><img alt="" src="assets/img/pro4.jpg" class="img-fluid rounded" /></a>
            </div>
            </div>
            </div>
            </div>
</section>
          );
    }
}
 
export default Homepageaddsection;