import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import CartScrollBar from "./CartScrollBar";
import Counter from "./Counter";
import EmptyCart from "../empty-states/EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { findDOMNode } from "react-dom";
// import useScript from 'hooks/useScript';


class CartPage extends React.Component {

	constructor() {
		super();
		let qtyLocal = localStorage.getItem('app_data_qty');
		let cartInfoLocal = localStorage.getItem('app_data_info');
		if (!qtyLocal && !cartInfoLocal) {
			location.hash = '/'
		}
	}

	buyNowFunc(event) {
		location.hash = 'country';
	}

	applyPromoCode(event) {
		var textContent = '';
		var isAddDiv = (document.querySelector('.promoInfo') == null);
		if (isAddDiv) {
			var div = document.querySelector('.promoWrapper');
			var span = document.createElement("span");
			span.className = "promoInfo";
			var breakTag = document.createElement("br");
			// div.appendChild(span);
			// div.appendChild(breakTag);
			// document.querySelector('.promoBtn')
		}
		var getCode = document.querySelector('.promoCode').value;
		if (getCode.trim().length == 0) {
			if (isAddDiv) {
				var textNode = document.createTextNode("Empty code ..!");
				span.appendChild(textNode);
				span.style.color = "red";
				div.appendChild(span);
			} else {
				document.querySelector('.promoInfo').textContent = "Empty code ..!";
				document.querySelector('.promoInfo').style.color = "red";
			}
			// setTimeout(function(){
			// 	document.querySelector('.promoInfo').textContent = "";
			//
			// },2000);
			return;
		}
		var getTot = document.querySelector('.totAmt').textContent;
		event.currentTarget.innerHTML = "<span class='promo-btn-loader'></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Applying ...";//debugger;
		setTimeout(function () {
			document.querySelector('.promoBtn').textContent = "Apply";
			var discountPerc, discountAmt, alertMessage, messageColor;
			if (getCode == 'rahulshettyacademy') {
				discountPerc = '10%';
				getTot = parseInt(getTot) - (parseInt(getTot) * 10 / 100);
				discountAmt = getTot;
				alertMessage = "Code applied ..!";
				messageColor = "green";
			} else {
				discountPerc = '0%';
				getTot = parseInt(getTot);
				discountAmt = getTot;
				alertMessage = "Invalid code ..!";
				messageColor = "red";
			}

			document.querySelector('.discountPerc').textContent = discountPerc;
			document.querySelector('.discountAmt').textContent = discountAmt;
			if (isAddDiv) {
				var textNode = document.createTextNode(alertMessage);
				span.appendChild(textNode);
				span.style.color = messageColor;
				div.appendChild(span);
			} else {
				document.querySelector('.promoInfo').textContent = alertMessage;
				document.querySelector('.promoInfo').style.color = messageColor;
			}
			// setTimeout(function(){
			// 	document.querySelector('.promoInfo').textContent = "";
			// },2000)
		}, 5000);
	}

	render() {
		let totItems;
		totItems = localStorage.getItem('app_data_tqty');
		let totAmt;
		totAmt = localStorage.getItem('app_data_tamt');
		let cartItems;
		let qtyLocal = localStorage.getItem('app_data_qty');
		let cartInfoLocal = localStorage.getItem('app_data_info');
		let cartItemsJSON = JSON.parse(cartInfoLocal) || [];
		cartItems = cartItemsJSON.map(product => {
			return (
				<tr>
					<td>
						<img className="product-image" style={{ width: 50, height: 50 }} src={product.image} />
					</td>
					<td><p className="product-name">{product.name}</p></td>
					<td>
						<p className="quantity">
							{product.quantity}
						</p>
					</td>
					<td>
						<p className="amount">
							{product.price}
						</p>
					</td>
					<td><p className="amount">{product.quantity * product.price}</p></td>
				</tr>
			);
		});
		let view;
		if (cartItems.length <= 0) {
			view = <EmptyCart />;
		} else {
			view = (
				<table
					border="1"
					width="100%"
					className="cartTable"
					id="productCartTables"
				><thead>
						<tr>
							<td><b>#</b></td>
							<td><b>Product Name</b></td>
							<td><b>Quantiry</b></td>
							<td><b>Price</b></td>
							<td><b>Total</b></td>
						</tr>
					</thead>
					<tbody>
						{cartItems}
					</tbody>
				</table>
			);
		}
		return (
			<div className="container">
				<header style={{ marginLeft: '-125px' }}>
					<div className="container">
						<div className="brand greenLogo">GREEN<span className="redLogo">KART</span></div>
						<a className="cart-header-navlink blinkingText" href="https://qasummit.org/" target="_blank">London QA Meetup @Rahul Shetty - Limited Seats! Book Now!</a>
						<a className="cart-header-navlink blinkingText" href="https://qasummit.org/" target="_blank">London QA Meetup @Rahul Shetty - Limited Seats! Book Now!</a>
					</div>
				</header>
				<div className="products-wrapper">
					<div className="products">
						{view}
						<br />
						<br />
						<div style={{ textAlign: "right", width: "100%", marginTop: 20, marginRight: 10 }}>
							<div className="promoWrapper">
								<input type="text" className="promoCode" placeholder="Enter promo code" /> &nbsp;&nbsp; <button className="promoBtn" onClick={this.applyPromoCode.bind(this)}>Apply</button><br />
							</div>
							<b>No. of Items 				: </b>{totItems} <br />
							<b>Total Amount 				: </b><span className="totAmt" >{totAmt} </span><br />
							<b>Discount      				: </b><span className="discountPerc" >0%</span><br />
							<b>Total After Discount : </b><span className="discountAmt" >{totAmt}</span><br /><br />
							<button onClick={this.buyNowFunc.bind(this)}>Place Order</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default CartPage;
