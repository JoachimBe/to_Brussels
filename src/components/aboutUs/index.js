
import React from "react";
import './index.css';

class AboutUs extends React.Component{
    render() {
      return (
      <div>
          <h1>About Us</h1>
          <h2>What our site does</h2>
              <p>To Brussels helps people, tourrists and locals, plan their trip arround Brussels and helps them discover new and intresting things all arround the city.</p>
              <p>Users have the possibility to choose among a variety of activites throughout the beautiful city of Brussels.</p>
          <h2>Meet the creators</h2>
          <div class="creators">
              <img class="photo photo1" src="./components/AboutUs/img/IMG_Anja.png"/>
              <div class="photo-description photo1-description">
                  <p>Anja Razafitrimo</p>
                  <p>24 years old</p>
                  <p>Student at Wilde Code School</p>
              </div>   

              <img class="photo photo2" src="img/IMG_Cristina.png"/>
              <div class="photo-description photo2-description">
                  <p>Cristina Gonzalez</p>
                  <p>22 years old</p>
                  <p>Student at Wilde Code School</p>
              </div>

              <img class="photo photo3" src="img/IMG_Joachim.png"/>
              <div class="photo-description photo3-description">
                  <p>Joachim Bertrand</p>
                  <p>27 years old</p>
                  <p>Student at Wilde Code School</p>
              </div>
          </div>
      </div>
      );
    }
}
  
  export default AboutUs;