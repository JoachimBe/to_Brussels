import React from "react";
import footer from './index.css';

class Footer extends React.Component{
    render() {
      return (
        <div>
            <footer>
                <ul class="footer-list">
                    <li><a className="footer-link" href="">Legal</a></li>
                    <li><a className="footer-link" href="">About us</a></li>
                    <li><a className="footer-link">To Brussels ©</a></li>
                </ul>
            </footer>      
        </div>
      );
    }
  }
  
export default Footer;