import React, { useState } from "react";
import Navbar from './components/Navbar';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
function Mainpage(){

  const MyButton = styled(Button)({
    background: '#D9AA82',
    height: 48,
    width: 130,
    color: 'white',
    marginTop: 25,
    '&:hover': {
      backgroundColor: '#C19672',
      borderColor: '#0062cc',
      boxShadow: 'none',
    }

  });
  const ContactButton = styled(Button)({
    background: '#EFDDBE',
    height: 48,
    width: 130,
    color: 'black',
    marginTop: 25,
    '&:hover': {
      backgroundColor: '#C7BAA2',
      boxShadow: 'none',
    }

  });







return(
<div id="content">
  <Navbar/>
  <div id="header">
  
    <div className="header-overlay">

        <h1>Lets create</h1>
        <h1>Beautiful Memories</h1>
        <a href="#Contact">
        <MyButton variant="contained"> Contact Us</MyButton>
        </a>
    </div>
  
  
  </div>

  <div id="About-us" className="flex-container">
    <div className="flex-container About-description">
      <h2>About Us</h2>
      <p>Soires is a compnay stationed in Long Island NY created by Sierra Wilson, we provide high quality events for great orices.  Our mission is to take the stress off our clients and create a seamless experience for their guests.Let us help you create a beautiful event that you will always remember.  </p>
    </div>
    <img src='../assets/womanevent2.jpg' class="about-pic" />
  </div>

  <div id="Elegance-sec" className="flex-container">
    <img src='../assets/eventdining.jpg' class="elegance-pic" />
    <div className="flex-container elegance-description">
      <h2>Elegance</h2>
      <p>Sierra has a keen eye for design and can bring your vision to life. From beautiful flower arrangements to a elegant table setup, Soires will create a dazzling event for you. </p>
    </div>
  </div>

  <div id="testimonial" className="flex-container">
    <div className="testimonial-description">
      <img src='../assets/quote.png' class="quote-pic" />
      <p>Sierra really pays attention to detail. 
        She created a beautiful experience that I will always remember. <br/> -Dominique</p>
    </div>
  </div>

  <div id="Services" className="flex-container">
    <div className="flex-container services-description">
      <h2>Services</h2>
      <p>Soires handle a range of event types, From babyshowers to birthday parties, Soires has got you covered. Some common events Soires creates are lavish picsnics, parties, dining hall events, and Weddings  </p>
    </div>
    <img src='../assets/desert.jpg' class="desert-pic" />
  </div>

  <div id="ChooseUs" className="flex-container">
    <div className="flex-container choose-description">
      <h2>Why choose us ?</h2>
      <p> Soires makes gorgeous events like no other. We will provide you with great prices that can fit your budget. Soires is the only place you can find the perfect combination of elegance and affordability in NY </p>
    </div>
    <img src='../assets/teamwork.png' class="teamwork-pic" />
  </div>

  <div id="Contact" className="flex-container">
    <div className="flex-container Contact-info">
      <h2>Contact Us</h2>
      <em>78 Baron Ave, WestBabylon, NY 11704</em>
      <em>soires@gmail.com</em>
      <em>631-671-0018</em>
    </div>
    <div className="flex-container contact-email">
      <h2>Send us a email</h2>
      <div className="flex-container contact-textboxes">
        <input type="text" className="medium-textbox textbox-margin" placeholder="First Name"/>
        <input type="text" className="medium-textbox " placeholder="Last Name"/>
      </div>
      <div className="flex-container contact-textboxes">
        <input type="text" className="long-textbox " placeholder="Email"/>   
      </div>
      <div className="flex-container contact-textboxes">
        <input type="text" className="large-textbox " placeholder="Message"/>   
      </div>
      <ContactButton variant="contained"> Contact Us</ContactButton>
    </div>
  </div>

  <div id="Footer" className="flex-container">
    <div className="flex-container Contact-info">
      <h2>Soires</h2>
      <em>78 Baron Ave, WestBabylon, NY 11704</em>
      <em>soires@gmail.com</em>
      <em>631-671-0018</em>
    </div>
    <div className="flex-container social-media">
      <div className="flex-container">
        <FontAwesomeIcon icon={faFacebookF} size="md"  className="social-icon"/><em> Facebook</em>
      </div>
      <div className="flex-container">
        <FontAwesomeIcon icon={faTwitter} size="md"  className="social-icon"/><em> Twitter</em>
      </div>
      <div className="flex-container">
        <FontAwesomeIcon icon={faInstagram} size="md" className="social-icon" /><em> Instagram</em>
      </div>

    </div>

    <div className="flex-container sections">
      <div className="flex-container">
        <em> About Us</em>
      </div>
      <div className="flex-container">
        <em> Contact</em>
      </div>
      <div className="flex-container">
        <em> Services</em>
      </div>

    </div>
  </div>


</div>
)


}


export default Mainpage;