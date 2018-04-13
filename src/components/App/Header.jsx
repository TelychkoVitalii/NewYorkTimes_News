import React, {Component} from 'react';
import '../../styles/Header.css';

class Header extends Component {
    searchArtist = (e) => {
        console.log(e.target.value)
    };

    render() {
        return (
            <header>
                <h3>
                    <img className="logo" src="pZAjTcKC_400x400.jpg" alt="logo"/>
                    <span>DataArt</span> Music Player
                </h3>
                <input type="text"
                       placeholder="Search"
                       className="searchInput" onInput={this.searchArtist}/>
                <h4>Settings</h4>
            </header>
        );
    }
}

export default Header;

// https://itunes.apple.com/search?term=lana&media=music&limit=20