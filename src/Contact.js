import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

class Contact extends Component {
  state = {
    salutation: "Pani",
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    message: "",
    nameValid: true,
    surnameValid: true,
    emailValid: true,
    phoneNumberValid: true,
    messageValid: true,
    messageSent: null,
  };

  handleTextInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name + "Valid"]: this.validateInput(e),
    });
  };

  handleSelectInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = this.validateForm();

    if (isFormValid) {
      console.log("wysyłamy");
      emailjs
        .sendForm("gmail", "elbud", e.target, "user_ZfJq9Et9cpKuBEA8cjwr9")
        .then(
          (result) => {
            console.log("wysłane");
            this.setState({
              messageSent: true,
            });
          },
          (error) => {
            console.log("wysłane");
            this.setState({
              messageSent: false,
            });
          }
        );
      this.resetForm();
    } else {
      console.log("ni chuja");
    }
  };

  resetForm = () => {
    this.setState({
      salutation: "Pani",
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      message: "",
      nameValid: true,
      surnameValid: true,
      emailValid: true,
      phoneNumberValid: true,
      messageValid: true,
    });
  };

  isNameValid = (name) => {
    return name.length >= 3 && name.indexOf(" ") === -1;
  };

  isEmailValid = (name) => {
    return /^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(name);
  };

  isMessageValid = (message) => {
    return message.length >= 10;
  };

  isPhoneNumberValid = (phoneNumber) => {
    return /^\d+$/.test(phoneNumber) && phoneNumber.length === 9;
  };

  validateInput = (e) => {
    switch (e.target.name) {
      case "name":
      case "surname":
        return this.isNameValid(e.target.value);
      case "email":
        return this.isEmailValid(e.target.value);
      case "message":
        return this.isMessageValid(e.target.value);
      case "phoneNumber":
        return this.isPhoneNumberValid(e.target.value);
      default:
        return true;
    }
  };

  validateForm = () => {
    let nameValid = this.isNameValid(this.state.name);
    let surnameValid = this.isNameValid(this.state.surname);
    let emailValid = this.isEmailValid(this.state.email);
    let messageValid = this.isMessageValid(this.state.message);
    let phoneNumberValid = this.isPhoneNumberValid(this.state.phoneNumber);

    this.setState({
      nameValid,
      surnameValid,
      emailValid,
      messageValid,
      phoneNumberValid,
    });

    return (
      nameValid &&
      surnameValid &&
      emailValid &&
      messageValid &&
      phoneNumberValid
    );
  };

  render() {
    return (
      <div>
        <h3>Napisz do nas</h3>
        <p>
          Jeśli masz pytania lub wątpliwości zostaw nam wiadomość. Odpowiemy tak
          szybko, jak to tylko będzie możliwe.
        </p>
        <form className="contact_form" onSubmit={this.handleSubmit}>
          <label>
            Tytuł:
            <select
              className="form_input"
              name="salutation"
              value={this.state.salutation}
              onChange={this.handleSelectInput}
            >
              <option>Pani</option>
              <option>Pan</option>
            </select>
          </label>
          <br />
          <label>
            Imię:
            <input
              className="form_input"
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Wpisz swoje imię..."
              onChange={this.handleTextInput}
            />
          </label>
          <br />
          {this.state.nameValid ? null : (
            <div className="alert alert-danger" role="alert">
              Wprowadź przynajmniej 3 znaki, bez spacji.
            </div>
          )}
          <label>
            Nazwisko:
            <input
              className="form_input"
              type="text"
              name="surname"
              value={this.state.surname}
              placeholder="Wpisz swoje nazwisko..."
              onChange={this.handleTextInput}
            />
          </label>
          <br />
          {this.state.surnameValid ? null : (
            <div className="alert alert-danger" role="alert">
              Wprowadź przynajmniej 3 znaki, bez spacji.
            </div>
          )}
          <label>
            Numer telefonu: (+48):
            <input
              className="form_input"
              type="tel"
              value={this.state.phoneNumber}
              onChange={this.handleTextInput}
              placeholder="Wpisz swój numer telefonu..."
              name="phoneNumber"
            />
          </label>
          <br />
          {this.state.phoneNumberValid ? null : (
            <div className="alert alert-danger" role="alert">
              Wprowadź numer telefonu składający się z 9 liczb.
            </div>
          )}
          <label>
            Twój email:
            <input
              className="form_input"
              type="email"
              name="email"
              value={this.state.email}
              placeholder="Wpisz swój email..."
              onChange={this.handleTextInput}
            />
          </label>
          <br />
          {this.state.emailValid ? null : (
            <div className="alert alert-danger" role="alert">
              Wprowadź adres email w poprawnym formacie, np. 'xxxxx@xxxx.xx'
            </div>
          )}
          <label>
            Wiadomość:
            <textarea
              className="form_input message"
              name="message"
              value={this.state.message}
              placeholder="Wpisz swoją wiadomość..."
              onChange={this.handleTextInput}
              rows={5}
            />
          </label>
          <br />
          {this.state.messageValid ? null : (
            <div className="alert alert-danger" role="alert">
              Wprowadź wiadomość składającą się z przynajmniej 10 znaków.
            </div>
          )}

          {/* <button className="submit_btn">Wyślij</button> */}
          <button
            type="submit"
            class="btn btn-outline-secondary btn-lg btn-block"
          >
            Wyślij
          </button>
          <br />
          {this.state.messageSent !== null ? (
            this.state.messageSent ? (
              <div
                className="alert message-confirmation alert-success"
                role="alert"
              >
                Twoja wiadomość została wysłana, postaramy się odpowiedzieć
                najszybciej, jak to będzie możliwe. Dziękujemy.
              </div>
            ) : (
              <div
                className="alert message-confirmation alert-danger"
                role="alert"
              >
                Coś poszło nie tak, Twoja wiadomość nie została wysłana
                poprawnie. Skontaktuj się z nami telefonicznie (numer znajdziesz
                w zakładce 'O nas'). Przepraszamy.
              </div>
            )
          ) : null}
        </form>
      </div>
    );
  }
}

export default Contact;
