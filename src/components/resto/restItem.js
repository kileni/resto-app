import React from 'react';
import ReactDOM from 'react-dom'

class RestItem extends  React.Component {
   
    render() { 
        return ( 
                <div>
                    
                 <div class="row">
                    <h5 class="mb-4 mt-3 col-md-12">Best Sellers</h5>
                    <div class="col-md-4 col-sm-6 mb-4">
                    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div class="list-card-image">
                    <div class="star position-absolute"><span class="badge badge-success"><i class="icofont-star"></i> 3.1 (300+)</span></div>
                    <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="icofont-heart"></i></a></div>
                    <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                    <a href="#">
                    <img src="img/list/7.png" class="img-fluid item-img"/>
                    </a>
                    </div>
                    <div class="p-3 position-relative">
                    <div class="list-card-body">
                    <h6 class="mb-1"><a href="#" class="text-black">Bite Me Sandwiches</a></h6>
                    <p class="text-gray mb-2">North Indian • Indian</p>
                    <p class="text-gray time mb-0"><a class="btn btn-link btn-sm pl-0 text-black pr-0" href="#">$550 </a> <span class="badge badge-success">NEW</span> <span class="float-right">
                    <a class="btn btn-outline-secondary btn-sm" href="#">ADD</a>
                    </span>
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-4">
                    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div class="list-card-image">
                    <div class="star position-absolute"><span class="badge badge-success"><i class="icofont-star"></i> 3.1 (300+)</span></div>
                    <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="icofont-heart"></i></a></div>
                    <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                    <a href="#">
                    <img src="img/list/8.png" class="img-fluid item-img"/>
                    </a>
                    </div>
                    <div class="p-3 position-relative">
                    <div class="list-card-body">
                    <h6 class="mb-1"><a href="#" class="text-black">Famous Dave's Bar-B
                    </a>
                    </h6>
                    <p class="text-gray mb-2">Hamburgers • Indian</p>
                    <p class="text-gray time mb-0"><a class="btn btn-link btn-sm pl-0 text-black pr-0" href="#">$250 </a> <span class="badge badge-primary">NEW</span> <span class="float-right">
                    <span class="count-number">
                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                    <input class="count-number-input" type="text" value="1" readonly=""/>
                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                    </span>
                    </span>
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mb-4">
                    <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div class="list-card-image">
                    <div class="star position-absolute"><span class="badge badge-success"><i class="icofont-star"></i> 3.1 (300+)</span></div>
                    <div class="favourite-heart text-danger position-absolute"><a href="#"><i class="icofont-heart"></i></a></div>
                    <div class="member-plan position-absolute"><span class="badge badge-dark">Promoted</span></div>
                    <a href="#">
                    <img src="img/list/9.png" class="img-fluid item-img"/>
                    </a>
                    </div>
                    <div class="p-3 position-relative">
                    <div class="list-card-body">
                    <h6 class="mb-1"><a href="#" class="text-black">Bite Me Sandwiches</a></h6>
                    <p class="text-gray mb-2">North Indian • Indian</p>
                    <p class="text-gray time mb-0"><a class="btn btn-link btn-sm pl-0 text-black pr-0" href="#">$250 </a> <span class="badge badge-info">NEW</span> <span class="float-right">
                    <a class="btn btn-outline-secondary btn-sm" href="#">ADD</a>
                    </span>
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="row">
                    <h5 class="mb-4 mt-3 col-md-12">Quick Bites <small class="h6 text-black-50">3 ITEMS</small></h5>
                    <div class="col-md-12">
                    <div class="bg-white rounded border shadow-sm mb-4">
                    <div class="gold-members p-3 border-bottom">
                    <a class="btn btn-outline-secondary btn-sm  float-right" href="#">ADD</a>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-danger food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Chicken Tikka Sub</h6>
                    <p class="text-gray mb-0">$314 - 12" (30 cm)</p>
                    </div>
                    </div>
                    </div>
                    <div class="gold-members p-3 border-bottom">
                    <span class="count-number float-right">
                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                    <input class="count-number-input" type="text" value="1" readonly=""/>
                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                    </span>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-danger food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Cheese corn Roll <span class="badge badge-danger">BESTSELLER</span></h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    <div class="gold-members p-3">
                    <span class="count-number float-right">
                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                    <input class="count-number-input" type="text" value="1" readonly=""/>
                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                    </span>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-success food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Cheese Spinach corn Roll <span class="badge badge-success">Pure Veg</span></h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="row">
                    <h5 class="mb-4 mt-3 col-md-12">Starters <small class="h6 text-black-50">3 ITEMS</small></h5>
                    <div class="col-md-12">
                    <div class="bg-white rounded border shadow-sm mb-4">
                    <div class="menu-list p-3 border-bottom">
                    <span class="count-number float-right">
                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                    <input class="count-number-input" type="text" value="1" readonly=""/>
                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                    </span>
                    <div class="media">
                    <img class="mr-3 rounded-pill" src="img/5.jpg" alt="Generic placeholder image"/>
                    <div class="media-body">
                    <h6 class="mb-1">Veg Spring Roll</h6>
                    <p class="text-gray mb-0">$314 - 12" (30 cm)</p>
                    </div>
                    </div>
                    </div>
                    <div class="menu-list p-3 border-bottom">
                    <span class="count-number float-right">
                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                    <input class="count-number-input" type="text" value="1" readonly=""/>
                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                    </span>
                    <div class="media">
                    <img class="mr-3 rounded-pill" src="img/2.jpg" alt="Generic placeholder image"/>
                    <div class="media-body">
                    <h6 class="mb-1">Stuffed Mushroom <span class="badge badge-danger">BESTSELLER</span></h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    <div class="menu-list p-3">
                    <span class="count-number float-right">
                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                    <input class="count-number-input" type="text" value="1" readonly=""/>
                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                    </span>
                    <div class="media">
                    <img class="mr-3 rounded-pill" src="img/3.jpg" alt="Generic placeholder image"/>
                    <div class="media-body">
                    <h6 class="mb-1">Honey Chilli Potato
                    <span class="badge badge-success">Pure Veg</span>
                    </h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div class="row">
                    <h5 class="mb-4 mt-3 col-md-12">Soups <small class="h6 text-black-50">8 ITEMS</small></h5>
                    <div class="col-md-12">
                    <div class="bg-white rounded border shadow-sm">
                    <div class="gold-members p-3 border-bottom">
                    <a class="btn btn-outline-secondary btn-sm  float-right" href="#">ADD</a>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-danger food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Tomato Dhania Shorba</h6>
                    <p class="text-gray mb-0">$314 - 12" (30 cm)</p>
                    </div>
                    </div>
                    </div>
                    <div class="gold-members p-3 border-bottom">
                    <a class="btn btn-outline-secondary btn-sm  float-right" href="#">ADD</a>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-danger food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Veg Manchow Soup</h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    <div class="gold-members p-3 border-bottom">
                    <span class="count-number float-right">
                    <button class="btn btn-outline-secondary  btn-sm left dec"> <i class="icofont-minus"></i> </button>
                    <input class="count-number-input" type="text" value="1" readonly="" />
                    <button class="btn btn-outline-secondary btn-sm right inc"> <i class="icofont-plus"></i> </button>
                    </span>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-success food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Lemon Coriander Soup</h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    <div class="gold-members p-3 border-bottom">
                    <a class="btn btn-outline-secondary btn-sm  float-right" href="#">ADD</a>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-danger food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Tomato Dhania Shorba</h6>
                    <p class="text-gray mb-0">$314 - 12" (30 cm)</p>
                    </div>
                    </div>
                    </div>
                    <div class="gold-members p-3 border-bottom">
                    <a class="btn btn-outline-secondary btn-sm  float-right" href="#">ADD</a>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-danger food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Veg Manchow Soup</h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    <div class="gold-members p-3">
                    <a class="btn btn-outline-secondary btn-sm  float-right" href="#">ADD</a>
                    <div class="media">
                    <div class="mr-3"><i class="icofont-ui-press text-success food-item"></i></div>
                    <div class="media-body">
                    <h6 class="mb-1">Lemon Coriander Soup</h6>
                    <p class="text-gray mb-0">$600</p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                    
                   
              </div>
               );
    }

 }
export default RestItem
  
    
 