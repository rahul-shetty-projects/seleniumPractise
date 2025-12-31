import React, { Component } from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { HashRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import axios from "axios";
// import App from "./components/App";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import CheckoutKartView from "./components/CheckoutKartView";
import CartPage from "./components/CartPage";
import Country from "./components/Country";
import Policy from "./components/Policy";
import Offers from "./components/Offers";
// import Main from "./components/Main";
import "./scss/style.scss";
// const productJson = "./assets/products.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false,
      checkoutModalActive: false
    };
    // let qtyLocal = localStorage.getItem('app_data_qty');
    // let cartInfoLocal = localStorage.getItem('app_data_info');
    // if(qtyLocal && cartInfoLocal && false) {
    //   console.log('working');
    //   this.state.quantity = qtyLocal;
    //   this.state.cart = JSON.parse(cartInfoLocal);
    // }
    localStorage.setItem('app_data_qty', null);
    localStorage.setItem('app_data_info', null);
    localStorage.setItem('app_data_tamt', null);
    localStorage.setItem('app_data_tqty', null);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    const currentOrigin = window.location.origin;
    const currentPath = window.location.pathname;
    let url =
      `${currentOrigin}${currentPath}data/products.json`;
    // let url = './assets/products.json';
    axios.get(url).then(response => {
      this.setState({
        products: response.data
      });
    });
  }
  componentWillMount() {
    this.getProducts();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
        localStorage.setItem('app_data_qty', this.state.quantity);
        localStorage.setItem('app_data_info', JSON.stringify(this.state.cart));
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    localStorage.setItem('app_data_qty', this.state.quantity);
    localStorage.setItem('app_data_info', JSON.stringify(this.state.cart));
    e.preventDefault();
  }

  handleCheckoutKart(e) {
    // this.setState({
    //   showCart: !this.state.showCart,
    //   // checkoutModalActive: !this.state.checkoutModalActive
    // });
    // document.querySelector('.checkoutKartModal').classList.add('active');
    // debugger;
    localStorage.setItem('app_data_qty', this.state.quantity);
    localStorage.setItem('app_data_info', JSON.stringify(this.state.cart));
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    localStorage.setItem('app_data_tqty', total);
    let total2 = 0;
    // let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total2 += cart[i].price * parseInt(cart[i].quantity);
    }
    localStorage.setItem('app_data_tamt', total2);
    // location.hash = 'cart';
    // localStorage.setItem('app_data_tamt', this.state.totalAmount);
    // localStorage.setItem('app_data_tqty', this.state.totalItems);
    setTimeout(function(){location.href = '#/cart';},500)
  }

  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
    localStorage.setItem('app_data_tqty', this.state.totalItems);
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
    localStorage.setItem('app_data_tamt', total);
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {
    return (
      <div className="container">
        <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
          handleCheckoutKart={this.handleCheckoutKart}
        />
        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
        <CheckoutKartView
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
          handleCheckoutKart={this.handleCheckoutKart}
          openModal={this.state.checkoutModalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
// export default App;

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={CartPage} />
      <Route path="/country" component={Country} />
      <Route path="/policy" component={Policy} />
      <Route path="/offers" component={Offers} />
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// ReactDOM.render(
//   <App>
//      <Router history={browserHistory} >
//         <Route path="/" component={App}>
//             <Route path="test" component={CartPage} />
//         </Route>
//     </Router>
//     </App>,
// // eslint-disable-next-line no-undef
// document.getElementById('root')
// );
