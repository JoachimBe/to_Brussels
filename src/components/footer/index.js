import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";


class Footer extends React.Component{
    render() {
      return (
            <footer className="footer">
                <ul class="footer-list">
                    <li className="liste-footer"><NavLink className="footer-link" to="/legal">Legal</NavLink></li>
                    <li className="liste-footer"><NavLink className="footer-link" to="/about">About us</NavLink></li>
                    <li className="liste-footer"><a className="footer-link">To Brussels ©</a></li>
                </ul>
            </footer>      
      );
    }
  }
  
export default Footer;
