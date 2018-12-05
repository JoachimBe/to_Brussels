import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";


class Footer extends React.Component{
    render() {
      return (
            <footer className="footer">
                <ul className="footer-list">
                    <li className="liste-footer"><NavLink className="footer-link" to="/legal">Legal</NavLink></li>
                    <li className="liste-footer"><NavLink className="footer-link" to="/about">About us</NavLink></li>
                    <li className="liste-footer"><span className="footer-link">To Brussels ©</span></li>
                </ul>
            </footer>      
      );
    }
  }
  
export default Footer;
