import React from 'react';
import searchimg from './images/01_Home_bg.png';
import './styles/search.css'

class Search extends React.Component {
    render(){
        return (
            <div className="conteiner search">
                <div className="container">
                  <div className="row">
                    <div className="col search-form">
                        <div className="">
                            <form>
                                <h2>Znajdź formularz:</h2>
                                <input type="text" />
                            </form>
                        </div>
                    </div>
                        <div className="col">
                            <div className="">
                                <img alt="search" className="search-img" src={searchimg}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;