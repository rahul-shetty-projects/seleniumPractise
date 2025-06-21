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
			  <a className="cart-header-navlink blinkingText" href="https://rahulshettyacademy.com/" target="_blank">Limited offer - FREE Core Java & QA Resume course</a>
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
