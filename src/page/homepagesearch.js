import React from 'react';

class Homepagesearch extends React.Component {
  
    render() { 
        return ( 
        <div>
            <section class="pt-5 pb-5 homepage-search-block position-relative">
            <div class="banner-overlay"></div>
            <div class="container">
            <div class="row d-flex align-items-center">
            <div class="col-md-8">
            <div class="homepage-search-title">
            <h1 class="mb-2 font-weight-normal"><span class="font-weight-bold">Find Awesome Deals</span> in Australia</h1>
            <h5 class="mb-5 text-secondary font-weight-normal">Lists of top restaurants, cafes, pubs, and bars in Melbourne, based on trends</h5>
            </div>
            <div class="homepage-search-form">
            <form class="form-noborder">
            <div class="form-row">
            <div class="col-lg-3 col-md-3 col-sm-12 form-group">
            <div class="location-dropdown">
            <i class="icofont-location-arrow"></i>
            <select class="custom-select form-control-lg">
            <option> Quick Searches </option>
            <option> Breakfast </option>
            <option> Lunch </option>
            <option> Dinner </option>
            <option> Cafés </option>
            <option> Delivery </option>
            </select>
            </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12 form-group">
            <input type="text" placeholder="Enter your delivery location" class="form-control form-control-lg"/>
            <a class="locate-me" href="#"><i class="icofont-ui-pointer"></i> Locate Me</a>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-12 form-group">
            <a href="listing.html" class="btn btn-primary btn-block btn-lg btn-gradient">Search</a>

            </div>
            </div>
            </form>
            </div>
            <h6 class="mt-4 text-shadow font-weight-normal">E.g. Beverages, Pizzas, Chinese, Bakery, Indian...</h6>
            <div class="owl-carousel owl-carousel-category owl-theme">
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/1.png" alt="" />
            <h6>American</h6>
            <p>156</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/2.png" alt="" />
            <h6>Pizza</h6>
            <p>120</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="assets/img-fluid" src="assets/img/list/3.png" alt=""/>
            <h6>Healthy</h6>
            <p>130</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/4.png" alt="" />
            <h6>Vegetarian</h6>
            <p>120</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/5.png" alt=""/>
            <h6>Chinese</h6>
            <p>111</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/6.png" alt=""/>
            <h6>Hamburgers</h6>
            <p>958</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/7.png" alt=""/>
            <h6>Dessert</h6>
            <p>56</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/8.png" alt=""/>
            <h6>Chicken</h6>
            <p>40</p>
            </a>
            </div>
            </div>
            <div class="item">
            <div class="osahan-category-item">
            <a href="#">
            <img class="img-fluid" src="assets/img/list/9.png" alt=""/>
            <h6>Indian</h6>
            <p>156</p>
            </a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
        </div>


         );
    }
}
 
export default Homepagesearch;