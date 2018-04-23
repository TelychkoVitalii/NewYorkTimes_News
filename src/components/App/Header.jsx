import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import Search from './Search';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = inject('store')(observer(class Header extends Component {

    render() {
        const { store, articleStore } = this.props;
        return (
            <header>
                <h3 className="brand">
                    <Link to='/topics' className="brandLink">
                        <span>DataArt</span> Top Stories
                    </Link>
                </h3>
                <div className="search">
                    <Search articleStore={articleStore} />
                </div>
                <h3>
                    <Link to='/favorites' className="favoriteLink">Favorites</Link>
                    {store.topicStore.isAdded ? <span className='added'>Added</span> : null}
                </h3>
            </header>
        );
    }
}));

export default Header;