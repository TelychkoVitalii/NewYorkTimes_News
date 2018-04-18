import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import '../../styles/Favorites.css';

const Favorites = inject('store')(observer(class Favorites extends Component {
    store = this.props.store;

    componentDidMount() {
        this.store.favoritesList = JSON.parse(localStorage.getItem('favoritesList'))
    }

    removeFavoriteTopic = (index) => {
        this.store.favoritesList.splice(index, 1);
        localStorage.setItem('favoritesList', JSON.stringify(this.store.favoritesList));
    };

    render() {
        const favorites = this.store.favoritesList.map((topic, index) => {
            const multimedia = topic.multimedia.slice().map(el => el.url);
            return (
                <div key={index} className="fv_list">
                    <img src={multimedia[3]}
                         alt="story" />
                    <div className="descBlock">
                        <h3>{topic.title}</h3>
                        <p>{topic.abstract}</p>
                        <div className="addInfo">
                            <a href={topic.url} target="_blank">Details</a>
                            <span className="removeOption"
                                  onClick={() => this.removeFavoriteTopic(index)}>Remove</span>
                        </div>
                    </div>
                </div>

            )
        });
        return (
            <div className="tp_perfect">
                {this.store.favoritesList.length !== 0 ? favorites : <p className="defaultTitle">Empty List</p>}
            </div>
        )}
}));

export default Favorites;