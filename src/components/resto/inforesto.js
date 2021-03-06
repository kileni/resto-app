import React from 'react';


class InfoResto extends Component {
  
    render() { 
        return ( 
            <div>
            <div class="tab-pane fade" id="pills-restaurant-info" role="tabpanel" aria-labelledby="pills-restaurant-info-tab">
            <div id="restaurant-info" class="bg-white rounded shadow-sm p-4 mb-4">
            <div class="address-map float-right ml-5">
            <div class="mapouter">
            <div class="gmap_canvas"><iframe width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
            </div>
            </div>
            <h5 class="mb-4">Restaurant Info</h5>
            <p class="mb-3">Jagjit Nagar, Near Railway Crossing,
            <br /> Near Model Town, Ludhiana, PUNJAB
            </p>
            <p class="mb-2 text-black"><i class="icofont-phone-circle text-primary mr-2"></i> +91 01234-56789, +91 01234-56789</p>
            <p class="mb-2 text-black"><i class="icofont-email text-primary mr-2"></i> <a href="https://askbootstrap.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="6108000c0e120009000f21060c00080d4f020e0c">[email&#160;protected]</a>, <a href="https://askbootstrap.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="4e213d2f262f202b2f3a0e29232f2722602d2123">[email&#160;protected]</a></p>
            <p class="mb-2 text-black"><i class="icofont-clock-time text-primary mr-2"></i> Today 11am – 5pm, 6pm – 11pm
            <span class="badge badge-success"> OPEN NOW </span>
            </p>
            <hr class="clearfix">
            <p class="text-black mb-0">You can also check the 3D view by using our menue map clicking here &nbsp;&nbsp;&nbsp; <a class="text-info font-weight-bold" href="#">Venue Map</a></p>
            </hr>
            <hr class="clearfix">
            <h5 class="mt-4 mb-4">More Info</h5>
            <p class="mb-3">Dal Makhani, Panneer Butter Masala, Kadhai Paneer, Raita, Veg Thali, Laccha Paratha, Butter Naan</p>
            </hr>
            <div class="border-btn-main mb-4">
            <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Breakfast</a>
            <a class="border-btn text-danger mr-2" href="#"><i class="icofont-close-circled"></i> No Alcohol Available</a>
            <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Vegetarian Only</a>
            <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Indoor Seating</a>
            <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Breakfast</a>
            <a class="border-btn text-danger mr-2" href="#"><i class="icofont-close-circled"></i> No Alcohol Available</a>
            <a class="border-btn text-success mr-2" href="#"><i class="icofont-check-circled"></i> Vegetarian Only</a>
            </div>
            </div>
            </div>
            </div>
            
       
         );
    }
}
 
export default InfoResto;
