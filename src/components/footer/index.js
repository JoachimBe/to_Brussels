import React from "react";
import './index.css';

class Footer extends React.Component{
    render() {
      return (
            <footer className="footer">
                <ul class="footer-list">
                    <li className="liste-footer"><a className="footer-link" href="">Legal</a></li>
                    <li className="liste-footer"><a className="footer-link" href="">About us</a></li>
                    <li className="liste-footer"><a className="footer-link">To Brussels ©</a></li>
                </ul>
            </footer>      
      );
    }
  }
  
export default Footer;
