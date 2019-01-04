import React, { Component } from 'react';
import '../styles/socialmedia.css'

class SocialMedia extends Component {

    render() {
        return (
                <ul className="social-media">
                    <li>
                        <a href="https://www.facebook.com/" className="facebook"><span>Facebook</span><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" className="twitter"><span>Tweeter</span><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" className="LinkedIn"><span>Linkedin</span><i className="fab fa-linkedin-in"></i></a>
                    </li>
                </ul>
        );
    }

}

export default SocialMedia;