import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import Star from 'react-icons/lib/go/star';
import '../../styles/Options.css';

const Options = inject('store')(observer(class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            showStar: false
        }
    }

    openOptions = () => this.setState({isOpen: !this.state.isOpen});
    addFavorites = (index) => {
        const { store } = this.props;
        store.favoritesStore.addToFavorites(index);
        this.setToLocalStr(store.favoritesStore.favoritesList);
        store.favoritesStore.changeAddedOption();
        this.setState({isOpen: false, showStar: true});
    };
    setToLocalStr = (favoritesList) => localStorage.setItem('favoritesList', JSON.stringify(favoritesList));

    render() {
        return (
            <div>
                <div className="ddOptions">
                    {!this.state.showStar ?
                        <span className="options" onClick={this.openOptions}>...</span> :
                        <span className="addedToFv"><Star/></span>}
                        {this.state.isOpen &&
                            <ul className="listOptions"
                                onClick={() => this.addFavorites(this.props.story)}>
                                    <li>Add to Favorites</li>
                            </ul>
                        }
                </div>
            </div>
        );
    }
}));

export default Options;