import React from 'react'
import { useSelector } from 'react-redux'
import $ from "jquery";

export default function Header() {
  const currentPage = useSelector(state=> state.constant.currentPage);

  function mobileMenu(){
    $("#mobile-navigation").slideToggle("slow");
  }

  return (
    <>    
    <header>
      <div></div>
      <div className="header-logo"><img src={require("../assets/img/no_bg/logo2.png")} alt="" /></div>
      <nav className="header-nav">
        <span><a className={(currentPage === "home")?"active":null} href="/">home</a></span>
        <span><a className={(currentPage === "about")?"active":null} href="/about">about</a></span>
        <span><a className={(currentPage === "products")?"active":null} href="/products">products</a></span>
        <span><a className={(currentPage === "contact")?"active":null} href="/contact">contact</a></span>
      </nav>

      <div className='mobile-menu-bars' onClick={mobileMenu}>
        <i style={{fontSize: "20px", color: "whitesmoke"}} className="fa fa-bars"></i>
      </div>
    {/* <div>
      <a href="/cart" className="header-cart-count">
        <i
          className="fa fa-shopping-bag"
          style={{color: "whitesmoke", fontSize: "17px"}}
        ></i>
        20
      </a>
    </div> */}
    </header>

    <section id='mobile-navigation' className='mobile-nav'>
      <a className={(currentPage === "home")?"active":null} href="/">home</a>
      <a className={(currentPage === "about")?"active":null} href="/about">about</a>
      <a className={(currentPage === "products")?"active":null} href="/products">products</a>
      <a className={(currentPage === "contact")?"active":null} href="/contact">contact</a>
    </section>
    </>
  )
}
