import React from 'react';
import logo from './images/docas_logo.png'
import './styles/navbar.css'

class Navbar extends React.Component {
    render(){
        return(
            <div className="navbar">
                <div className="content">
                    <img alt="logo" className="logo" src={logo}/>
                </div>
            </div>
        )
    }
}
export default Navbar;