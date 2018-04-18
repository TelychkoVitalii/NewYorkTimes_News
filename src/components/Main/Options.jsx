import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import '../../styles/Options.css';

const Options = inject('store')(observer(class Options extends Component {
    store = this.props.store;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    openOptions = () => this.setState({isOpen: !this.state.isOpen});
    addToFavorites = (index) => {
        this.store.favoritesList.push(this.store.topicData[index]);
        localStorage.setItem('favoritesList', JSON.stringify(this.store.favoritesList));
        this.store.isAdded = !this.store.isAdded;
        this.setState({isOpen: false});
    };

    render() {
        return (
            <div>
                <div className="ddOptions">
                    <span className="options" onClick={this.openOptions}>...</span>
                        {this.state.isOpen &&
                            <ul className="listOptions"
                                onClick={() => this.addToFavorites(this.props.story)}>
                                    <li>Add to Favorites</li>
                            </ul>
                        }
                </div>
            </div>
        );
    }
}));

export default Options;