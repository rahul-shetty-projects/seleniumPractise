import React from 'react';
import DatePicker from 'react-date-picker';
import ReactDOM from 'react-dom';
import ReactRedux from 'react-redux';
import Select from 'react-select';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
// import {Helmet} from "react-helmet";
import "../scss/components/_offers.scss";
require('react-data-components/css/table-twbs.css');
var DataTable = require('react-data-components').DataTable;

var columns = [
  { title: 'Veg/fruit name', prop: 'name' },
  { title: 'Price', prop: 'price' },
  { title: 'Discount price', prop: 'discount' }
];

var data = [
  { name: 'Apple', price: 67, discount: 41 },
  { name: 'Orange', price: 88, discount: 23 },
  { name: 'Mango', price: 93, discount: 53 },
  { name: 'Banana', price: 87, discount: 77 },
  { name: 'Pineapple', price: 44, discount: 34 },
  { name: 'Brinjal', price: 37, discount: 44 },
  { name: 'Tomato', price: 37, discount: 26 },
  { name: 'Potato', price: 34, discount: 22 },
  { name: 'Carrot', price: 34, discount: 12 },
  { name: 'Dragon fruit', price: 58, discount: 40 },
  { name: 'Guava', price: 42, discount: 20 },
  { name: 'Strawberry', price: 23, discount: 15 },
  { name: 'Cherry', price: 93, discount: 88 },
  { name: 'Beans', price: 38, discount: 36 },
  { name: 'Almond', price: 64, discount: 60 },
  { name: 'Rice', price: 37, discount: 46 },
  { name: 'Wheat', price: 67, discount: 28 },
  { name: 'Chocolate', price: 56, discount: 27 },
  { name: 'Cheese', price: 34, discount: 12 }
  // It also supports arrays
  // [ 'name value', 'city value', 'address value', 'phone value' ]
];

class Offers extends React.Component {

	constructor() {
	    super();
	    this.state = {
		    data: [],
		    sort: {
		      column: null,
		      direction: 'desc',
		    },
			dateValue: new Date(),
		 };
	}

	onDateChange = (date) => {
		this.setState({
			...this.state,
			dateValue: date
		});
	}

	componentWillMount() {
		// const scriptOne = document.createElement("script");
		// scriptOne.src = "https://code.jquery.com/jquery-3.5.1.min.js"
		// scriptOne.crossorigin="anonymous";
		// scriptOne.async = true;
		// document.body.appendChild(scriptOne);
		// const scriptTwo = document.createElement("script");
		// scriptTwo.src = "//cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js";
		// scriptTwo.async = true;
		// document.body.appendChild(scriptTwo);
		// const cssOne = document.createElement("link");
		// cssOne.href = "//cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css";
		// document.body.appendChild(cssOne);
	}

	componentDidMount() {

	// const data = [{'Apple': [230, 200]},{'Carrot': [36, 25]},{'Orange': [43, 40]},
	// 	{'Potato': [20, 10]},{'Tomato': [30, 15]},{'Mango': [95, 66]}, {'Strawberry': [44, 29]}, 
	// 	{'Brinjal': [67, 44]}, {'Cherry': [81, 68]}, {'Almond': [82, 53]}, {'Banana': [32, 16]},
	// 	{'Dragon fruit': [77, 59]}, {'Guava': [62, 35]}, {'Beans': [43, 22]}, {'Pineapple': [74, 56]}];

    
 //    this.setState({ data });


    
	// setTimeout(function(){
	// 	 $('#sortableTable').DataTable();
	// 	 $('.loader').hide();
	// },1000);	

	}

    render() {

      return (
      	<div className="container-fluid" style={{ marginLeft: -15}}>
         <header>
		    <div className="container">
		      <div className="brand greenLogo">
				<div className="brand greenLogo">GREEN<span className="redLogo">KART</span></div>
			  </div>
			  <a className="cart-header-navlink blinkingText" href="https://rahulshettyacademy.com/" target="_blank">Limited offer - FREE Core Java & QA Resume course</a>

		    </div>
		  </header>
		  <div className="products-wrapper">
		  	<div className="products">
		  	<div className="wrapperTwo">
				<button id="hiddenBtn" style={{ display: 'none'}}>
			        Click me
			    </button>
			    <div className="tableWrapper">
                <DataTable
			      keys="name"
			      className="table table-striped table-bordered table-sm"
			      id="sortableTable"
			      columns={columns}
			      initialData={data}
			      initialPageLength={5}
			      initialSortBy={{ prop: 'name', order: 'descending' }}
			    />
			    </div>
              </div>
		  	</div>
		  	</div>			
			  <div className='date-field-container'>
				<label htmlFor='deliveryDate'>Delivery Date</label>
				<DatePicker wrapperClassName="datePicker" format="MM / dd / yyyy" onChange={this.onDateChange} value={this.state.dateValue} />
				{/* <input name="deliveryDate" type='date' id="deliveryDate"/> */}
			</div>
		 </div>
      )
    }
}
export default Offers;
