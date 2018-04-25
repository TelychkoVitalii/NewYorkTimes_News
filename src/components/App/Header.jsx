import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import { reaction } from "mobx";
import Search from './Search';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = inject('store')(observer(class Header extends Component {

    state = {
        isAdded: false
    };

    componentDidMount() {
        const { store } = this.props;
        reaction(() => store.favoritesList.length, () => {
            this.setState({isAdded: true});
            setTimeout(() => {
                this.setState({isAdded: false});
            }, 700);
        });
    }

    render() {
        const { articleStore } = this.props;
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
                    {this.state.isAdded ? <span className='added'>Added</span> : null}
                </h3>
            </header>
        );
    }
}));

export default Header;