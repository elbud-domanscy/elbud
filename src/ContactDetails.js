import React from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <div className="contact_details">
      <h3>Nasze dane kontaktowe:</h3>
      <p>
        <strong>ELBUD Domańscy</strong>
      </p>
      <p>KOSZTORYSOWANIE, PROJEKTOWANIE, NADZÓR</p>
      <p>ul. Wypycha 14</p>
      <p>88-230 Piotrków Kujawski</p>
      <p>REGON: 368854949</p>
      <p>NIP: 8891076947</p>
      <p>Numer telefonu: +48 665 387 093</p>
      <p>
        Adres e-mail:
        <a href="mailto: ryszard-domanski@o2.pl"> ryszard-domanski@o2.pl</a>
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.165627608749!2d18.509372915698208!3d52.54852887981956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b56cf9872c809%3A0xf7fa3581ec6e4f9e!2sWypycha%2014%2C%2088-230%20Piotrk%C3%B3w%20Kujawski!5e0!3m2!1spl!2spl!4v1591623376429!5m2!1spl!2spl"
        width="400"
        height="350"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex="0"
        title="map"
      ></iframe>
    </div>
  );
};

export default ContactDetails;
