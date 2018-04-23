import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import '../../styles/Favorites.css';

const Favorites = inject('store')(observer(class Favorites extends Component {

    componentDidMount() {
        const { store } = this.props;
        store.topicStore.favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];
    }

    removeTopic = (index) => {
        const { store } = this.props;
        store.topicStore.removeFavoriteTopic(index);
    }

    render() {
        const { store } = this.props;
        const favorites = store.topicStore.favoritesList.map((topic, index) => {
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
                {store.topicStore.favoritesList.length !== 0 ? favorites : <p className="defaultTitle">Empty List</p>}
            </div>
        )}
}));

export default Favorites;