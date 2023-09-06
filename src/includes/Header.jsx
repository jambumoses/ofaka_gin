import React from 'react'

export default function Header() {
  return (
    <header>
    <div></div>
    <div className="header-logo"><img src={require("../assets/img/no_bg/logo2.png")} alt="" /></div>
    <nav className="header-nav">
      <span><a className="active" href="/">home</a></span>
      <span><a href="/about">about</a></span>
      <span><a href="/products">products</a></span>
      <span><a href="/contact">contact us</a></span>
    </nav>
    <div>
      <a href="/cart" className="header-cart-count">
        <i
          className="fa fa-shopping-bag"
          style={{color: "whitesmoke", fontSize: "17px"}}
        ></i>
        20
      </a>
    </div>
  </header>
  )
}
