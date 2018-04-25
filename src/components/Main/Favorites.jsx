import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import '../../styles/Favorites.css';

const Favorites = inject('store')(observer(class Favorites extends Component {

    componentDidMount() {
        const { store } = this.props;
        return store.getFavorites();
    }

    removeTopic = (index) => {
        const { store } = this.props;
        store.removeFavoriteTopic(index);
    };

    render() {
        const { store } = this.props,
              favoritesList = store.favoritesList.map((topic, index) => {
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
                                  onClick={() => this.removeTopic(index)}>Remove</span>
                        </div>
                    </div>
                </div>

            )
        });
        return (
            <div className="tp_perfect">
                {store.favoritesList.length !== 0 ? favoritesList : <p className="defaultTitle">Empty List</p>}
            </div>
        )}
}));

export default Favorites;