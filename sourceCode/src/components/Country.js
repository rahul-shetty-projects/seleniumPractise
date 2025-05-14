import React from 'react';
import ReactDOM from 'react-dom';
// import Select from 'react-select';


class Country extends React.Component {

	constructor() {
	    super();
	    let qtyLocal = localStorage.getItem('app_data_qty');
	    let cartInfoLocal = localStorage.getItem('app_data_info');
	    if(!qtyLocal && !cartInfoLocal) {
	      location.hash= '/'
	    }
	}

	showThankyou(event){
		if(document.querySelector('.chkAgree').checked) {
			document.querySelector('.wrapperTwo').innerHTML = "<span style='color:green;font-size:25px'>Thank you, your order has been placed successfully <br/> You'll be redirected to <a href='#/'>Home</a> page shortly!!<span>";
			setTimeout(function(){
				localStorage.setItem('app_data_qty', null);
			    localStorage.setItem('app_data_info', null);
			    localStorage.setItem('app_data_tamt', null);
			    localStorage.setItem('app_data_tqty', null);
				location.hash = '/';
			}, 5000)
		} else {
			document.querySelector('.errorAlert').style.display = "block";
		}
	}

	toggleProceedButton(event){
		document.querySelector('.errorAlert').style.display = "none";
	}

    render() {
    	var countries = [{value:"Afghanistan",label:"Afghanistan"},{value:"Albania",label:"Albania"},{value:"Algeria",label:"Algeria"},{value:"Andorra",label:"Andorra"},{value:"Angola",label:"Angola"},{value:"Anguilla",label:"Anguilla"},{value:"Antigua &amp; Barbuda",label:"Antigua &amp; Barbuda"},{value:"Argentina",label:"Argentina"},{value:"Armenia",label:"Armenia"},{value:"Aruba",label:"Aruba"},{value:"Australia",label:"Australia"},{value:"Austria",label:"Austria"},{value:"Azerbaijan",label:"Azerbaijan"},{value:"Bahamas",label:"Bahamas"},{value:"Bahrain",label:"Bahrain"},{value:"Bangladesh",label:"Bangladesh"},{value:"Barbados",label:"Barbados"},{value:"Belarus",label:"Belarus"},{value:"Belgium",label:"Belgium"},{value:"Belize",label:"Belize"},{value:"Benin",label:"Benin"},{value:"Bermuda",label:"Bermuda"},{value:"Bhutan",label:"Bhutan"},{value:"Bolivia",label:"Bolivia"},{value:"Bosnia &amp; Herzegovina",label:"Bosnia &amp; Herzegovina"},{value:"Botswana",label:"Botswana"},{value:"Brazil",label:"Brazil"},{value:"British Virgin Islands",label:"British Virgin Islands"},{value:"Brunei",label:"Brunei"},{value:"Bulgaria",label:"Bulgaria"},{value:"Burkina Faso",label:"Burkina Faso"},{value:"Burundi",label:"Burundi"},{value:"Cambodia",label:"Cambodia"},{value:"Cameroon",label:"Cameroon"},{value:"Canada",label:"Canada"},{value:"Cape Verde",label:"Cape Verde"},{value:"Cayman Islands",label:"Cayman Islands"},{value:"Chad",label:"Chad"},{value:"Chile",label:"Chile"},{value:"China",label:"China"},{value:"Colombia",label:"Colombia"},{value:"Congo",label:"Congo"},{value:"Cook Islands",label:"Cook Islands"},{value:"Costa Rica",label:"Costa Rica"},{value:"Cote D Ivoire",label:"Cote D Ivoire"},{value:"Croatia",label:"Croatia"},{value:"Cruise Ship",label:"Cruise Ship"},{value:"Cuba",label:"Cuba"},{value:"Cyprus",label:"Cyprus"},{value:"Czech Republic",label:"Czech Republic"},{value:"Denmark",label:"Denmark"},{value:"Djibouti",label:"Djibouti"},{value:"Dominica",label:"Dominica"},{value:"Dominican Republic",label:"Dominican Republic"},{value:"Ecuador",label:"Ecuador"},{value:"Egypt",label:"Egypt"},{value:"El Salvador",label:"El Salvador"},{value:"Equatorial Guinea",label:"Equatorial Guinea"},{value:"Estonia",label:"Estonia"},{value:"Ethiopia",label:"Ethiopia"},{value:"Falkland Islands",label:"Falkland Islands"},{value:"Faroe Islands",label:"Faroe Islands"},{value:"Fiji",label:"Fiji"},{value:"Finland",label:"Finland"},{value:"France",label:"France"},{value:"French Polynesia",label:"French Polynesia"},{value:"French West Indies",label:"French West Indies"},{value:"Gabon",label:"Gabon"},{value:"Gambia",label:"Gambia"},{value:"Georgia",label:"Georgia"},{value:"Germany",label:"Germany"},{value:"Ghana",label:"Ghana"},{value:"Gibraltar",label:"Gibraltar"},{value:"Greece",label:"Greece"},{value:"Greenland",label:"Greenland"},{value:"Grenada",label:"Grenada"},{value:"Guam",label:"Guam"},{value:"Guatemala",label:"Guatemala"},{value:"Guernsey",label:"Guernsey"},{value:"Guinea",label:"Guinea"},{value:"Guinea Bissau",label:"Guinea Bissau"},{value:"Guyana",label:"Guyana"},{value:"Haiti",label:"Haiti"},{value:"Honduras",label:"Honduras"},{value:"Hong Kong",label:"Hong Kong"},{value:"Hungary",label:"Hungary"},{value:"Iceland",label:"Iceland"},{value:"India",label:"India"},{value:"Indonesia",label:"Indonesia"},{value:"Iran",label:"Iran"},{value:"Iraq",label:"Iraq"},{value:"Ireland",label:"Ireland"},{value:"Isle of Man",label:"Isle of Man"},{value:"Israel",label:"Israel"},{value:"Italy",label:"Italy"},{value:"Jamaica",label:"Jamaica"},{value:"Japan",label:"Japan"},{value:"Jersey",label:"Jersey"},{value:"Jordan",label:"Jordan"},{value:"Kazakhstan",label:"Kazakhstan"},{value:"Kenya",label:"Kenya"},{value:"Kuwait",label:"Kuwait"},{value:"Kyrgyz Republic",label:"Kyrgyz Republic"},{value:"Laos",label:"Laos"},{value:"Latvia",label:"Latvia"},{value:"Lebanon",label:"Lebanon"},{value:"Lesotho",label:"Lesotho"},{value:"Liberia",label:"Liberia"},{value:"Libya",label:"Libya"},{value:"Liechtenstein",label:"Liechtenstein"},{value:"Lithuania",label:"Lithuania"},{value:"Luxembourg",label:"Luxembourg"},{value:"Macau",label:"Macau"},{value:"Macedonia",label:"Macedonia"},{value:"Madagascar",label:"Madagascar"},{value:"Malawi",label:"Malawi"},{value:"Malaysia",label:"Malaysia"},{value:"Maldives",label:"Maldives"},{value:"Mali",label:"Mali"},{value:"Malta",label:"Malta"},{value:"Mauritania",label:"Mauritania"},{value:"Mauritius",label:"Mauritius"},{value:"Mexico",label:"Mexico"},{value:"Moldova",label:"Moldova"},{value:"Monaco",label:"Monaco"},{value:"Mongolia",label:"Mongolia"},{value:"Montenegro",label:"Montenegro"},{value:"Montserrat",label:"Montserrat"},{value:"Morocco",label:"Morocco"},{value:"Mozambique",label:"Mozambique"},{value:"Namibia",label:"Namibia"},{value:"Nepal",label:"Nepal"},{value:"Netherlands",label:"Netherlands"},{value:"Netherlands Antilles",label:"Netherlands Antilles"},{value:"New Caledonia",label:"New Caledonia"},{value:"New Zealand",label:"New Zealand"},{value:"Nicaragua",label:"Nicaragua"},{value:"Niger",label:"Niger"},{value:"Nigeria",label:"Nigeria"},{value:"Norway",label:"Norway"},{value:"Oman",label:"Oman"},{value:"Pakistan",label:"Pakistan"},{value:"Palestine",label:"Palestine"},{value:"Panama",label:"Panama"},{value:"Papua New Guinea",label:"Papua New Guinea"},{value:"Paraguay",label:"Paraguay"},{value:"Peru",label:"Peru"},{value:"Philippines",label:"Philippines"},{value:"Poland",label:"Poland"},{value:"Portugal",label:"Portugal"},{value:"Puerto Rico",label:"Puerto Rico"},{value:"Qatar",label:"Qatar"},{value:"Reunion",label:"Reunion"},{value:"Romania",label:"Romania"},{value:"Russia",label:"Russia"},{value:"Rwanda",label:"Rwanda"},{value:"Saint Pierre &amp; Miquelon",label:"Saint Pierre &amp; Miquelon"},{value:"Samoa",label:"Samoa"},{value:"San Marino",label:"San Marino"},{value:"Satellite",label:"Satellite"},{value:"Saudi Arabia",label:"Saudi Arabia"},{value:"Senegal",label:"Senegal"},{value:"Serbia",label:"Serbia"},{value:"Seychelles",label:"Seychelles"},{value:"Sierra Leone",label:"Sierra Leone"},{value:"Singapore",label:"Singapore"},{value:"Slovakia",label:"Slovakia"},{value:"Slovenia",label:"Slovenia"},{value:"South Africa",label:"South Africa"},{value:"South Korea",label:"South Korea"},{value:"Spain",label:"Spain"},{value:"Sri Lanka",label:"Sri Lanka"},{value:"St Kitts &amp; Nevis",label:"St Kitts &amp; Nevis"},{value:"St Lucia",label:"St Lucia"},{value:"St Vincent",label:"St Vincent"},{value:"St. Lucia",label:"St. Lucia"},{value:"Sudan",label:"Sudan"},{value:"Suriname",label:"Suriname"},{value:"Swaziland",label:"Swaziland"},{value:"Sweden",label:"Sweden"},{value:"Switzerland",label:"Switzerland"},{value:"Syria",label:"Syria"},{value:"Taiwan",label:"Taiwan"},{value:"Tajikistan",label:"Tajikistan"},{value:"Tanzania",label:"Tanzania"},{value:"Thailand",label:"Thailand"},{value:"Timor L'Este",label:"Timor L'Este"},{value:"Togo",label:"Togo"},{value:"Tonga",label:"Tonga"},{value:"Trinidad &amp; Tobago",label:"Trinidad &amp; Tobago"},{value:"Tunisia",label:"Tunisia"},{value:"Turkey",label:"Turkey"},{value:"Turkmenistan",label:"Turkmenistan"},{value:"Turks &amp; Caicos",label:"Turks &amp; Caicos"},{value:"Uganda",label:"Uganda"},{value:"Ukraine",label:"Ukraine"},{value:"United Arab Emirates",label:"United Arab Emirates"},{value:"United Kingdom",label:"United Kingdom"},{value:"United States",label:"United States"},{value:"United States Minor Outlying Islands",label:"United States Minor Outlying Islands"},{value:"Uruguay",label:"Uruguay"},{value:"Uzbekistan",label:"Uzbekistan"},{value:"Venezuela",label:"Venezuela"},{value:"Vietnam",label:"Vietnam"},{value:"Virgin Islands (US)",label:"Virgin Islands (US)"},{value:"Yemen",label:"Yemen"},{value:"Zambia",label:"Zambia"},{value:"Zimbabwe",label:"Zimbabwe"}];
    	let countriesItems = countries.map(unit => {
	      return (
	        <option value={unit.value}>
	        	{unit.label}
	        </option>
	      );
	    });
	    let SelectCountries = (
	    	<select style={{ width: 200}}>
	    		<option disabled selected="selected">Select</option>
	    		{countriesItems}
	    	</select>
	    );

      return (
      	<div className="container">
         <header style={{ marginLeft: '-125px' }}>
		    <div className="container">
		      <div className="brand greenLogo">GREEN<span className="redLogo">KART</span></div>
			  <a className="cart-header-navlink blinkingText" href="https://rahulshettyacademy.com/" target="_blank">Limited offer - FREE Core Java & QA Resume course</a>
		    </div>
		  </header>
		  <div className="products-wrapper">
		  	<div className="products">
		  	<div className="wrapperTwo" style={{ width: "100%", height: 320, textAlign: "center", fontSize: 20 }}>
                <label>Choose Country</label><br/>
                <div style={{ width: 360, margin: "10px auto" }}>
                	{SelectCountries}
                </div>
                <br/>
                <input type="checkbox" className="chkAgree" onClick={this.toggleProceedButton.bind(this)} /> Agree to the <a target="_blank" href="#/policy">Terms & Conditions</a>
                <br/><br/>
                <span className="errorAlert" style={{color:"red", display: "none"}}><b>Please accept Terms & Conditions - Required</b></span>
                <br/>
                <button onClick={this.showThankyou.bind(this)} >Proceed</button>
              </div>
		  	</div>
		  	</div>
		 </div>
      )
    }
}
export default Country;
