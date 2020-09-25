import React from 'react';

class Restable extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div class="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
            <div id="book-a-table" class="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
            <h5 class="mb-4">Book A Table</h5>
            <form>
            <div class="row">
            <div class="col-sm-6">
            <div class="form-group">
            <label>Full Name</label>
            <input class="form-control" type="text" placeholder="Enter Full Name"/>
            </div>
            </div>
            <div class="col-sm-6">
            <div class="form-group">
            <label>Email Address</label>
            <input class="form-control" type="text" placeholder="Enter Email address"/>
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-6">
            <div class="form-group">
            <label>Mobile number</label>
            <input class="form-control" type="text" placeholder="Enter Mobile number"/>
            </div>
            </div>
            <div class="col-sm-6">
            <div class="form-group">
            <label>Date And Time</label>
            <input class="form-control" type="text" placeholder="Enter Date And Time"/>
            </div>
            </div>
            </div>
            <div class="form-group text-right">
            <button class="btn btn-primary" type="button"> Submit </button>
            </div>
            </form>
            </div>
            </div>
            </div>
         );
    }
}
 
export default Restable