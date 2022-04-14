import React, { Component } from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
      return (
        <div className="header">
          <img
            src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg"
            alt="Logo" className="logo"
          />
        <div className="buttonContainer">
          {this.props.isDetails ? (
            <Button
              className="bookNowButton"
              variant="contained"
              color="primary"
            >
              Book Now
            </Button>
          ) : (
            ""
          )}
          <Button variant="contained" className="loginLogoutButton">
            LOGIN
          </Button>
      </div>
        </div>
      );
    }
  }
  export default Header;
   