
import React, { useState } from 'react';

import './App.css';
import './js/script.js'

import "./sections/hero.css"
import "./sections/about.css"
import "./sections/header.css"
import "./sections/footer.css"
import "./sections/popular.css"
import "./sections/subscribe.css"
import "./sections/trending.css"


import firebase from 'firebase/app';
import 'firebase/storage';



import sushi from './assets/sushi-1.png';
import shishu from "./assets/sushi-2.png";
import user from "./assets/user.png";
import a from "./assets/sushi-3.png";
import b from "./assets/sushi-9.png";
import c from "./assets/sushi-8.png";
import d from "./assets/sushi-7.png";
import e from "./assets/sushi-6.png";
import f from "./assets/sushi-12.png";
import g from "./assets/sushi-11.png";
import h from "./assets/sushi-10.png";
import i from "./assets/sushi-5.png";
import j from "./assets/sushi-4.png";






firebase.initializeApp({
  apiKey: "better have give your code ",
  authDomain: "better have give your code ",
  projectId: "better have give your code ",
  storageBucket: "better have give your code ",
  messagingSenderId: "better have give your code ",
  appId: "better have give your code ",
  measurementId: "better have give your code "
});



function App() {

  const [number, setNumber] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSearch = () => {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`${number}.pdf`);

    fileRef
      .getDownloadURL()
      .then((url) => {
        setFileUrl(url);
        setAlertMessage('');
      })
      .catch((error) => {
        setFileUrl('');
        setAlertMessage('Invalid number');
      });
  };


  return (
    <div >


      <header>
      <nav className="header__nav">
        <div className="header__logo">
          <h4 data-aos="fade-down">Get A Bento</h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header__menu" data-aos="fade-down">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#food">Food</a>
          </li>
          <li>
            <a href="#services">Verify</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
         
        </ul>

        <ul className="header__menu-mobile" data-aos="fade-down">
          <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
    <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round" />
</svg>
          </li>
        </ul>
      </nav>
    </header>

    <section className="hero">
      <div className="hero-image">
        <img 
          src={sushi}
          alt="sushi"
          data-aos="fade-up"
        />
        <h2 data-aos="fade-up">
          B <br />
          E <br />
          N <br />
          T <br />
          O
        </h2>

        <div className="hero-image__overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-content-info" data-aos="fade-left">
          <h1>Feel the taste of Cakes 🍰</h1>
          <p>Feel the taste of the most popular cakes in Dhaka</p>

          <div className="hero-content__buttons">
            <button className="hero-content__order-button">
            <a href="tel:+8801316989296">
            Call Hotline
            </a>
          </button>
          
          </div>
        </div>

        <div className="hero-content__testimonial" data-aos="fade-up">
          <div className="hero-content__customer flex-center">
            <h4>5<span>k+</span></h4>
            <p>Happy Customers</p>
          </div>

          <div className="hero-content__review">
            <img src={user} alt="user" />
            <p>"They Have the best Cakes I have ever tasted."</p>
          </div>
        </div>
      </div>
    </section>

    <section className="about-us" id="about-us">
      <div className="about-us__image">
        <div className="about-us__image-sushi3">
          <img src={a} alt="sushi" data-aos="fade-right" />
        </div>

      

        <div className="about-us__image-sushi2">
          <img src={shishu} alt="sushi"  data-aos="fade-right" />
        </div>
      </div>

      <div className="about-us__content"  data-aos="fade-left">
        <p className="sushi__subtitle">About Us</p>
        <h3 className="sushi__title">Our mission is to bring true Taste of Baking.</h3>
        <p className="sushi__description">We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our  dining for our customers.
        </p>
      </div>
    </section>

    <section className="popular-foods" id="menu">
      <h2 className="popular-foods__title" data-aos="flip-up" style={{color:'black'}}>Popular Food </h2>

      <div className="popular-foods__filters sushi__hide-scrollbar" data-aos="fade-up">

        <button className="popular-foods__filter-btn">
          <img src={b} alt="sushi 9" />
          Cake 
        </button>
        <button className="popular-foods__filter-btn">
          <img src={c} alt="sushi 8" />
          Dalgona
        </button>
        <button className="popular-foods__filter-btn">
          <img src={d} alt="sushi 7" />
          Donut
        </button>
        <button className="popular-foods__filter-btn">
          <img src={e} alt="sushi 6" />
          Brownies
        </button>

      </div>

      <div className="popular-foods__catalogue" data-aos="fade-up">
        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src={f} alt="sushi-12" />
          <h4 className="popular-foods__card-title">Brownie</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00611 1.10388C8.4127 0.280173 9.5873 0.280172 9.99389 1.10388L11.8324 4.82843C11.9937 5.15523 12.3053 5.38185 12.6659 5.43456L16.7791 6.03575C17.6878 6.16858 18.05 7.28565 17.3921 7.92647L14.4176 10.8236C14.1562 11.0782 14.0369 11.4453 14.0986 11.805L14.8003 15.8965C14.9556 16.802 14.0051 17.4925 13.192 17.0649L9.5159 15.1317C9.19293 14.9618 8.80707 14.9618 8.48411 15.1317L4.80802 17.0649C3.99488 17.4925 3.04439 16.802 3.1997 15.8965L3.90145 11.805C3.96314 11.4453 3.84381 11.0782 3.58238 10.8236L0.607895 7.92647C-0.0500285 7.28565 0.31217 6.16858 1.22094 6.03575L5.33405 5.43456C5.69467 5.38185 6.00633 5.15523 6.16764 4.82843L8.00611 1.10388Z" fill="#F9B043"/>
            </svg>

              <p>4.9</p>
            </div>

            <p className="popular-foods__card-price">৳ 100</p>
          </div>
        </article>

        <article className="popular-foods__card active-card">
          <img className="popular-foods__card-image" src={g} alt="sushi-11" />
          <h4 className="popular-foods__card-title">Bento Cake </h4>
          
          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00611 1.10388C8.4127 0.280173 9.5873 0.280172 9.99389 1.10388L11.8324 4.82843C11.9937 5.15523 12.3053 5.38185 12.6659 5.43456L16.7791 6.03575C17.6878 6.16858 18.05 7.28565 17.3921 7.92647L14.4176 10.8236C14.1562 11.0782 14.0369 11.4453 14.0986 11.805L14.8003 15.8965C14.9556 16.802 14.0051 17.4925 13.192 17.0649L9.5159 15.1317C9.19293 14.9618 8.80707 14.9618 8.48411 15.1317L4.80802 17.0649C3.99488 17.4925 3.04439 16.802 3.1997 15.8965L3.90145 11.805C3.96314 11.4453 3.84381 11.0782 3.58238 10.8236L0.607895 7.92647C-0.0500285 7.28565 0.31217 6.16858 1.22094 6.03575L5.33405 5.43456C5.69467 5.38185 6.00633 5.15523 6.16764 4.82843L8.00611 1.10388Z" fill="#F9B043"/>
</svg>

              <p>5.0</p>
            </div>
            
            <p className="popular-foods__card-price">৳ 700</p>
          </div>
        </article>

        <article className="popular-foods__card">
          <img className="popular-foods__card-image" src={h} alt="sushi-10" />
          <h4 className="popular-foods__card-title">Donut</h4>

          <div className="popular-foods__card-details flex-between">
            <div className="popular-foods__card-rating">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00611 1.10388C8.4127 0.280173 9.5873 0.280172 9.99389 1.10388L11.8324 4.82843C11.9937 5.15523 12.3053 5.38185 12.6659 5.43456L16.7791 6.03575C17.6878 6.16858 18.05 7.28565 17.3921 7.92647L14.4176 10.8236C14.1562 11.0782 14.0369 11.4453 14.0986 11.805L14.8003 15.8965C14.9556 16.802 14.0051 17.4925 13.192 17.0649L9.5159 15.1317C9.19293 14.9618 8.80707 14.9618 8.48411 15.1317L4.80802 17.0649C3.99488 17.4925 3.04439 16.802 3.1997 15.8965L3.90145 11.805C3.96314 11.4453 3.84381 11.0782 3.58238 10.8236L0.607895 7.92647C-0.0500285 7.28565 0.31217 6.16858 1.22094 6.03575L5.33405 5.43456C5.69467 5.38185 6.00633 5.15523 6.16764 4.82843L8.00611 1.10388Z" fill="#F9B043"/>
</svg>

              <p>4.7</p>
            </div>

            <p className="popular-foods__card-price">৳ 60</p>
          </div>
        </article>
      </div>

     
    </section>

    <section className="trending" id="food">
      <section className="trending-sushi">
        <div className="trending__content" data-aos="fade-right">
          <p className="sushi__subtitle">What’s Trending </p>
  
          <h3 className="sushi__title">Bento Cakes 
          </h3>
          <p className="sushi__description">Feel the taste of the most popular and delicious cakes.
          </p>
  
          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Cheese Cake</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Chocolate Cake</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Vanila Cake</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Strawberry Cake</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Red Velvet</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Mud Cake</p>
            </li>
          </ul>
        </div>
  
        <div className="trending__image flex-center">
          <img src={i} alt="sushi-5" data-aos="fade-left" />
  
          <div className="trending__arrow trending__arrow-left">
          <svg width="6" height="423" viewBox="0 0 6 423" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM2.99998 423L5.88673 418L0.11323 418L2.99998 423ZM2.5 3L2.49998 418.5L3.49998 418.5L3.5 3L2.5 3Z" fill="#121212"/>
</svg>

          </div>
  
          <div className="trending__arrow trending__arrow-bottom">
          <svg width="423" height="6" viewBox="0 0 423 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM423 3L418 0.113249V5.88675L423 3ZM3 3.5L418.5 3.5V2.5L3 2.5V3.5Z" fill="#121212"/>
</svg>

          </div>
        </div>

      </section>

      <div className="trending__discover" data-aos="zoom-in">
        <p>Discover</p>
      </div>

      <section className="trending-drinks">
        <div className="trending__image flex-center">
          <img src={j} alt="sushi-4" data-aos="fade-right" />
  
          <div className="trending__arrow trending__arrow-top">
          <svg width="423" height="6" viewBox="0 0 423 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM423 3L418 0.113249V5.88675L423 3ZM3 3.5L418.5 3.5V2.5L3 2.5V3.5Z" fill="#121212"/>
</svg>

          </div>
  
          <div className="trending__arrow trending__arrow-right">
          <svg width="6" height="423" viewBox="0 0 6 423" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM2.99998 423L5.88673 418L0.11323 418L2.99998 423ZM2.5 3L2.49998 418.5L3.49998 418.5L3.5 3L2.5 3Z" fill="#121212"/>
</svg>

          </div>
        </div>

        <div className="trending__content" data-aos="fade-left">
          <p className="sushi__subtitle">What’s Trending </p>
  
          <h3 className="sushi__title">Bento Donuts
          </h3>
          <p className="sushi__description">Feel the taste of the Bento Donuts, they will not disappoint you.
          </p>
  
          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Chocolate</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>
                Vanila</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Strawberry</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Oreo</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Peanut Butter</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8161 1L4.48275 8.33333L1.14941 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              </div>
              <p>Dark Chocolate</p>
            </li>
          </ul>
        </div>
      </section>
    </section>

    <section className="subscription flex-center" id="services">
      <h2 data-aos="flip-down">
        Verify  <br />
        Your Achievement
      </h2>


      <div className="subscription__form" data-aos="fade-up">
        <input type="text" placeholder="Ex. 10110001.." value={number} onChange={handleNumberChange}/>
        <button onClick={handleSearch}>Search</button>
       

      </div>
       
      {fileUrl ? (
        <div>
          <h4 style={{marginTop:'20px',marginBottom:'20px', color:'black',fontSize:'25px'}}>File Found :
          <a href={fileUrl} target="_blank" rel="noopener noreferrer" style={{color:'gray', fontSize:'23px',marginLeft:'6px'}}>
            Download File
          </a></h4>
         
        </div>
      ) : (
        <div>
          {alertMessage && <p style={{marginTop:'20px',marginBottom:'20px', color:'black',fontSize:'25px'}} >{alertMessage}</p>}
        </div>
      )}

    </section>
    <div style={{display:'flex',justifyContent:'space-around'}}> 
    <footer className="footer flex-between">
    <div>
      
      
      
    
      <h3 className="footer__logo">
        <span>Get A </span>Bento      </h3>

        </div>
        <div>
      <ul className="footer__social">
        <li className="flex-center">
        <a href='https://www.facebook.com/profile.php?id=100071206346771' target='_blank' rel="nonreferrer noreferrer">
        <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.71429 23V12.7778H11.1429L12 8.51852H7.71429V6.81482C7.71429 5.11111 8.57314 4.25926 10.2857 4.25926H12V0C11.1429 0 10.08 0 8.57143 0C5.42143 0 3.42857 2.45419 3.42857 5.96296V8.51852H0V12.7778H3.42857V23H7.71429Z" fill="white"/>
</svg>
</a>
        </li>
        <li className="flex-center">
        <a href='https://www.instagram.com/get_a_bento/' target='_blank' rel="nonreferrer noreferrer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6269 0H5.17413C2.28856 0 0 2.4 0 5.4V14.6C0 17.5 2.28856 19.9 5.27363 20H14.7264C17.6119 20 20 17.6 20 14.6V5.4C19.9005 2.4 17.6119 0 14.6269 0ZM18.1095 14.5C18.1095 16.5 16.5174 18.2 14.4279 18.2H5.37313C3.38308 18.2 1.69154 16.5 1.79104 14.5V5.5C1.79104 3.5 3.38308 1.8 5.37313 1.8H14.4279C16.4179 1.8 18.1095 3.5 18.1095 5.5V14.5Z" fill="white"/>
<path d="M10.098 5.00308C7.35457 4.90507 5.00308 7.15928 5.00308 9.90353C4.9051 12.6478 7.15861 15 9.90202 15C12.6454 15 14.9969 12.8438 14.9969 10.0995V10.0015C15.0949 7.25729 12.8414 5.00308 10.098 5.00308ZM10.098 13.2358C8.33436 13.2358 6.86468 11.8637 6.7667 10.0995C6.7667 8.33539 8.1384 6.86525 9.90202 6.76724C11.6656 6.66923 13.1353 8.13937 13.2333 9.90353V10.0015C13.3313 11.7657 11.8616 13.2358 10.098 13.2358Z" fill="white"/>
<path d="M15 3C15.5455 3 16 3.41667 16 4C16 4.58333 15.5455 5 15 5C14.4545 5 14 4.58333 14 4C14 3.41667 14.4545 3 15 3Z" fill="white"/>
</svg>
</a>

       
        </li>
      </ul>
      </div>
      
    </footer>
    </div>


    </div>
  );
}

export default App;
