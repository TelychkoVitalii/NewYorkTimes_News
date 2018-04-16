import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import * as api from '../../services/api';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';
import capitalize from 'lodash.capitalize';

class Main extends Component {
    topicData;

    navigateTopic = (section) => {
        return api.fetchTopic(section)
            .then(response => this.topicData = response.data.results)
            .catch(error => error);
    };

    render() {
        const sections = ['sports', 'politics', 'business', 'travel', 'food', 'fashion', 'movies', 'theater', 'books'];
        return (
            <div className="wm_main">
                {sections.map((section, index) => {
                    return (
                        <Link key={index}
                              to={`/topic/${section}`}
                              onClick={() => this.navigateTopic(section)}
                              className="sectionInterface">
                                {capitalize(section)}
                        </Link>
                    )
                })}
            </div>
        );
    }
}

export default decorate(Main, {
    topicData: observable,
    navigateTopic: action.bound
});