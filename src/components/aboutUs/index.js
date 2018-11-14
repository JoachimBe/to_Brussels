
import React from "react";
import './index.css';

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h2>What our site does</h2>
                <p>To Brussels helps people, tourrists and locals, plan their trip arround Brussels and helps them discover new and intresting things all arround the city.</p>
                <p>Users have the posbility to choose among a variety of activites throughout the beautiful city of Brussels.</p>
                <h2>Meet the creators</h2>
                <div className="creators">
                    <div className="creator">
                        <img className="photo photo1" src="https://i.goopics.net/q47Dn.png" alt="Anja" />
                        <div className="photo-description photo1-description">
                            <p>Anja Razafitrimo</p>
                            <p>24 years old</p>
                            <p>Student at Wilde Code School</p>
                        </div>
                    </div>
                    <div className="creator">
                        <img className="photo photo2" src="https://i.goopics.net/g3ODJ.png" alt="Cristina" />
                        <div className="photo-description photo2-description">
                            <p>Cristina Gonzalez</p>
                            <p>22 years old</p>
                            <p>Student at Wilde Code School</p>
                        </div>
                    </div>
                    <div className="creator">
                        <img className="photo photo3" src="https://i.goopics.net/keyDe.png" alt="Joachim" />
                        <div className="photo-description photo3-description">
                            <p>Joachim Bertrand</p>
                            <p>27 years old</p>
                            <p>Student at Wilde Code School</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;