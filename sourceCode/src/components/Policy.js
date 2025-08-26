import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

class Policy extends React.Component {

	constructor() {
	    super();
	}

    render() {

      return (
      	<div className="container">
         <header>
		    <div className="container">
		      <div className="brand greenLogo">
		        GREEN<span className="redLogo">KART</span>
		      </div>
			  <a className="cart-header-navlink blinkingText" href="https://qasummit.org/" target="_blank">London QA Meetup @Rahul Shetty - Limited Seats! Book Now!</a>
		    </div>
		  </header>
		  <div className="products-wrapper">
		  	<div className="products">
		  	<div className="wrapperTwo" style={{ width: 360, height: 320 }}>
                Here the terms and condition page 
                Click to geo back <a href="#/">Home</a>
              </div>
		  	</div>
		  	</div>
		 </div>
      )
    }
}
export default Policy;
