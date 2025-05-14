import React, { Component } from "react";
import CartScrollBar from "./CartScrollBar";
import Counter from "./Counter";
import EmptyCart from "../empty-states/EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";
// import Select2 from 'react-select2-wrapper';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

var countries = [{value:"Afghanistan",label:"Afghanistan"},{value:"Albania",label:"Albania"},{value:"Algeria",label:"Algeria"},{value:"Andorra",label:"Andorra"},{value:"Angola",label:"Angola"},{value:"Anguilla",label:"Anguilla"},{value:"Antigua &amp; Barbuda",label:"Antigua &amp; Barbuda"},{value:"Argentina",label:"Argentina"},{value:"Armenia",label:"Armenia"},{value:"Aruba",label:"Aruba"},{value:"Australia",label:"Australia"},{value:"Austria",label:"Austria"},{value:"Azerbaijan",label:"Azerbaijan"},{value:"Bahamas",label:"Bahamas"},{value:"Bahrain",label:"Bahrain"},{value:"Bangladesh",label:"Bangladesh"},{value:"Barbados",label:"Barbados"},{value:"Belarus",label:"Belarus"},{value:"Belgium",label:"Belgium"},{value:"Belize",label:"Belize"},{value:"Benin",label:"Benin"},{value:"Bermuda",label:"Bermuda"},{value:"Bhutan",label:"Bhutan"},{value:"Bolivia",label:"Bolivia"},{value:"Bosnia &amp; Herzegovina",label:"Bosnia &amp; Herzegovina"},{value:"Botswana",label:"Botswana"},{value:"Brazil",label:"Brazil"},{value:"British Virgin Islands",label:"British Virgin Islands"},{value:"Brunei",label:"Brunei"},{value:"Bulgaria",label:"Bulgaria"},{value:"Burkina Faso",label:"Burkina Faso"},{value:"Burundi",label:"Burundi"},{value:"Cambodia",label:"Cambodia"},{value:"Cameroon",label:"Cameroon"},{value:"Canada",label:"Canada"},{value:"Cape Verde",label:"Cape Verde"},{value:"Cayman Islands",label:"Cayman Islands"},{value:"Chad",label:"Chad"},{value:"Chile",label:"Chile"},{value:"China",label:"China"},{value:"Colombia",label:"Colombia"},{value:"Congo",label:"Congo"},{value:"Cook Islands",label:"Cook Islands"},{value:"Costa Rica",label:"Costa Rica"},{value:"Cote D Ivoire",label:"Cote D Ivoire"},{value:"Croatia",label:"Croatia"},{value:"Cruise Ship",label:"Cruise Ship"},{value:"Cuba",label:"Cuba"},{value:"Cyprus",label:"Cyprus"},{value:"Czech Republic",label:"Czech Republic"},{value:"Denmark",label:"Denmark"},{value:"Djibouti",label:"Djibouti"},{value:"Dominica",label:"Dominica"},{value:"Dominican Republic",label:"Dominican Republic"},{value:"Ecuador",label:"Ecuador"},{value:"Egypt",label:"Egypt"},{value:"El Salvador",label:"El Salvador"},{value:"Equatorial Guinea",label:"Equatorial Guinea"},{value:"Estonia",label:"Estonia"},{value:"Ethiopia",label:"Ethiopia"},{value:"Falkland Islands",label:"Falkland Islands"},{value:"Faroe Islands",label:"Faroe Islands"},{value:"Fiji",label:"Fiji"},{value:"Finland",label:"Finland"},{value:"France",label:"France"},{value:"French Polynesia",label:"French Polynesia"},{value:"French West Indies",label:"French West Indies"},{value:"Gabon",label:"Gabon"},{value:"Gambia",label:"Gambia"},{value:"Georgia",label:"Georgia"},{value:"Germany",label:"Germany"},{value:"Ghana",label:"Ghana"},{value:"Gibraltar",label:"Gibraltar"},{value:"Greece",label:"Greece"},{value:"Greenland",label:"Greenland"},{value:"Grenada",label:"Grenada"},{value:"Guam",label:"Guam"},{value:"Guatemala",label:"Guatemala"},{value:"Guernsey",label:"Guernsey"},{value:"Guinea",label:"Guinea"},{value:"Guinea Bissau",label:"Guinea Bissau"},{value:"Guyana",label:"Guyana"},{value:"Haiti",label:"Haiti"},{value:"Honduras",label:"Honduras"},{value:"Hong Kong",label:"Hong Kong"},{value:"Hungary",label:"Hungary"},{value:"Iceland",label:"Iceland"},{value:"India",label:"India"},{value:"Indonesia",label:"Indonesia"},{value:"Iran",label:"Iran"},{value:"Iraq",label:"Iraq"},{value:"Ireland",label:"Ireland"},{value:"Isle of Man",label:"Isle of Man"},{value:"Israel",label:"Israel"},{value:"Italy",label:"Italy"},{value:"Jamaica",label:"Jamaica"},{value:"Japan",label:"Japan"},{value:"Jersey",label:"Jersey"},{value:"Jordan",label:"Jordan"},{value:"Kazakhstan",label:"Kazakhstan"},{value:"Kenya",label:"Kenya"},{value:"Kuwait",label:"Kuwait"},{value:"Kyrgyz Republic",label:"Kyrgyz Republic"},{value:"Laos",label:"Laos"},{value:"Latvia",label:"Latvia"},{value:"Lebanon",label:"Lebanon"},{value:"Lesotho",label:"Lesotho"},{value:"Liberia",label:"Liberia"},{value:"Libya",label:"Libya"},{value:"Liechtenstein",label:"Liechtenstein"},{value:"Lithuania",label:"Lithuania"},{value:"Luxembourg",label:"Luxembourg"},{value:"Macau",label:"Macau"},{value:"Macedonia",label:"Macedonia"},{value:"Madagascar",label:"Madagascar"},{value:"Malawi",label:"Malawi"},{value:"Malaysia",label:"Malaysia"},{value:"Maldives",label:"Maldives"},{value:"Mali",label:"Mali"},{value:"Malta",label:"Malta"},{value:"Mauritania",label:"Mauritania"},{value:"Mauritius",label:"Mauritius"},{value:"Mexico",label:"Mexico"},{value:"Moldova",label:"Moldova"},{value:"Monaco",label:"Monaco"},{value:"Mongolia",label:"Mongolia"},{value:"Montenegro",label:"Montenegro"},{value:"Montserrat",label:"Montserrat"},{value:"Morocco",label:"Morocco"},{value:"Mozambique",label:"Mozambique"},{value:"Namibia",label:"Namibia"},{value:"Nepal",label:"Nepal"},{value:"Netherlands",label:"Netherlands"},{value:"Netherlands Antilles",label:"Netherlands Antilles"},{value:"New Caledonia",label:"New Caledonia"},{value:"New Zealand",label:"New Zealand"},{value:"Nicaragua",label:"Nicaragua"},{value:"Niger",label:"Niger"},{value:"Nigeria",label:"Nigeria"},{value:"Norway",label:"Norway"},{value:"Oman",label:"Oman"},{value:"Pakistan",label:"Pakistan"},{value:"Palestine",label:"Palestine"},{value:"Panama",label:"Panama"},{value:"Papua New Guinea",label:"Papua New Guinea"},{value:"Paraguay",label:"Paraguay"},{value:"Peru",label:"Peru"},{value:"Philippines",label:"Philippines"},{value:"Poland",label:"Poland"},{value:"Portugal",label:"Portugal"},{value:"Puerto Rico",label:"Puerto Rico"},{value:"Qatar",label:"Qatar"},{value:"Reunion",label:"Reunion"},{value:"Romania",label:"Romania"},{value:"Russia",label:"Russia"},{value:"Rwanda",label:"Rwanda"},{value:"Saint Pierre &amp; Miquelon",label:"Saint Pierre &amp; Miquelon"},{value:"Samoa",label:"Samoa"},{value:"San Marino",label:"San Marino"},{value:"Satellite",label:"Satellite"},{value:"Saudi Arabia",label:"Saudi Arabia"},{value:"Senegal",label:"Senegal"},{value:"Serbia",label:"Serbia"},{value:"Seychelles",label:"Seychelles"},{value:"Sierra Leone",label:"Sierra Leone"},{value:"Singapore",label:"Singapore"},{value:"Slovakia",label:"Slovakia"},{value:"Slovenia",label:"Slovenia"},{value:"South Africa",label:"South Africa"},{value:"South Korea",label:"South Korea"},{value:"Spain",label:"Spain"},{value:"Sri Lanka",label:"Sri Lanka"},{value:"St Kitts &amp; Nevis",label:"St Kitts &amp; Nevis"},{value:"St Lucia",label:"St Lucia"},{value:"St Vincent",label:"St Vincent"},{value:"St. Lucia",label:"St. Lucia"},{value:"Sudan",label:"Sudan"},{value:"Suriname",label:"Suriname"},{value:"Swaziland",label:"Swaziland"},{value:"Sweden",label:"Sweden"},{value:"Switzerland",label:"Switzerland"},{value:"Syria",label:"Syria"},{value:"Taiwan",label:"Taiwan"},{value:"Tajikistan",label:"Tajikistan"},{value:"Tanzania",label:"Tanzania"},{value:"Thailand",label:"Thailand"},{value:"Timor L'Este",label:"Timor L'Este"},{value:"Togo",label:"Togo"},{value:"Tonga",label:"Tonga"},{value:"Trinidad &amp; Tobago",label:"Trinidad &amp; Tobago"},{value:"Tunisia",label:"Tunisia"},{value:"Turkey",label:"Turkey"},{value:"Turkmenistan",label:"Turkmenistan"},{value:"Turks &amp; Caicos",label:"Turks &amp; Caicos"},{value:"Uganda",label:"Uganda"},{value:"Ukraine",label:"Ukraine"},{value:"United Arab Emirates",label:"United Arab Emirates"},{value:"United Kingdom",label:"United Kingdom"},{value:"United States",label:"United States"},{value:"United States Minor Outlying Islands",label:"United States Minor Outlying Islands"},{value:"Uruguay",label:"Uruguay"},{value:"Uzbekistan",label:"Uzbekistan"},{value:"Venezuela",label:"Venezuela"},{value:"Vietnam",label:"Vietnam"},{value:"Virgin Islands (US)",label:"Virgin Islands (US)"},{value:"Yemen",label:"Yemen"},{value:"Zambia",label:"Zambia"},{value:"Zimbabwe",label:"Zimbabwe"}];

class CheckoutKartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false,
      checkoutModalActive: false
    };
  }
  componentDidMount() {
    document.addEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.handleClickOutside.bind(this),
      true
    );
  }

  handleClickOutside(event) {
    const domNode = findDOMNode(this.refs.modal);
    if (!domNode || !domNode.contains(event.target)) {
      this.props.closeModal();
      // document.querySelector('.checkoutKartModal').classList.remove('active');
      // document.querySelector('.checkoutKartModal .quick-view').classList.remove('stageTwo');
      // document.querySelector('.checkoutKartModal .quick-view').classList.remove('stageThree');
    }
  }

  handleModalClose(event) {
    // document.querySelector('.checkoutKartModal').classList.remove('active');
    // document.querySelector('.checkoutKartModal .quick-view').classList.remove('stageTwo');
    // document.querySelector('.checkoutKartModal .quick-view').classList.remove('stageThree');
  }

  checkoutToCountry(event) {
    // document.querySelector('.wrapperOne').style.display = 'none';
    // document.querySelector('.wrapperTwo').style.display = 'block';
    var divWrapper = document.createElement('div');
    divWrapper.className = "loader-wrapper";
    divWrapper.innerHTML = "<div class='loader'></div>";
    document.querySelector('.checkoutKartModal .wrapperOne').appendChild(divWrapper);
    setTimeout(function(){
      document.querySelector('.checkoutKartModal .loader-wrapper').remove();
      document.querySelector('.checkoutKartModal .quick-view').classList.add('stageTwo');
    },1000)
  }

  orderPlaced(event) {
    var divWrapper = document.createElement('div');
    divWrapper.className = "loader-wrapper";
    divWrapper.innerHTML = "<div class='loader'></div>";
    document.querySelector('.checkoutKartModal .wrapperTwo').appendChild(divWrapper);
    setTimeout(function(){
      document.querySelector('.checkoutKartModal .loader-wrapper').remove();
      document.querySelector('.checkoutKartModal .quick-view').classList.add('stageThree');
      document.querySelector('.checkoutKartModal .quick-view').classList.remove('stageTwo');
      setTimeout(function(){
        // document.querySelector('.checkoutKartModal .quick-view').classList.remove('stageThree');
        window.location.reload();
      }, 1000)
    },1000)
  }

  handleClose() {
    this.props.closeModal();
  }

  render() {
    let cartItems;
    cartItems = this.state.cart.map(product => {
      return (
        <li className="cart-item" key={product.name}>
          <img className="product-image" src={product.image} />
          <div className="product-info">
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">
              {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
            </p>
            <p className="amount">{product.quantity * product.price}</p>
          </div>
          <a
            className="product-remove"
            href="#"
            onClick={this.props.removeProduct.bind(this, product.id)}
          >
            ×
          </a>
        </li>
      );
    });
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="ul"
          className="cart-items"
        >
          {cartItems}
        </CSSTransitionGroup>
      );
    }
    return (
      <div
        className="modal-wrapper checkoutKartModal"
      >
        <div className="modal" ref="modal">
          <button
            type="button"
            className="close"
            onClick={this.handleModalClose.bind(this)}
          >
            &times;
          </button>
          
          <div className="quick-view active" ref="cartPreview">
              <div className="quick-view-details">
                <span className="product-name">Cart</span>
              </div>
              <div className="wrapperOne">
                <CartScrollBar>{view}</CartScrollBar>
                <div className="showPriceWrapper product">
                    No. Of Items:<br/><span className="total-item">{this.props.totalItems}</span>
                    <br/>Total price:<br/><span className="total-price product-price">{this.props.total}</span>
                </div>
              </div>
              <div className="wrapperTwo" style={{ width: 360, height: 320 }}>
                <label>Choose Country</label>
                <Select
                  options={countries}
                  style={{ width: 200}}
                />
              </div>
              <div className="wrapperThree" style={{ width: 360, height: 320 }}>
                Thank you. Your order has been placed successfully ...!!! <br/>Wait ... Redirecting back to cart 
              </div>
              <div className="action-block">
                <button
                  type="button"
                  id="checkoutModalBtnOne"
                  className={this.state.cart.length > 0 ? " " : "disabled"}
                  onClick={this.checkoutToCountry.bind(this)}
                >
                  CHECKOUT
                </button>
                <button
                  type="button"
                  id="checkoutModalBtnTwo"
                  className={this.state.cart.length > 0 ? " " : "disabled"}
                  onClick={this.orderPlaced.bind(this)}
                >
                  BUY NOW
                </button>
              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default CheckoutKartView;
