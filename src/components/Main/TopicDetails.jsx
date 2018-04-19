import React, { Component } from 'react';
import Loading from '../App/Loading';
import Options from './Options';
import * as api from '../../services/api';
import { observer, inject } from "mobx-react";
import Moment from 'react-moment';
import Star from 'react-icons/lib/go/star';
import '../../styles/TopicDetails.css';

const TopicDetails = inject('store')(observer(class TopicDetails extends Component {
    lastUpdate = null;
    store = this.props.store;

    componentDidMount() {
        this.fetchData(this.props.location.pathname.replace('/topic/', ''));
    }

    fetchData = (section) => {
        return api.fetchTopic(section)
            .then(response => response.data.results)
            .then(data => {
                this.store.setFetchData(data);
                this.store.changeLoadingOption(true);
                this.setToLocalStr(this.store.topicData);
            })
    };

    setToLocalStr = (topicData) => localStorage.setItem('topicData', JSON.stringify(topicData));

    render() {
        const { store } = this.props,
              fvList = JSON.parse(localStorage.getItem('favoritesList')),
              fvTitle = fvList.map(el => el.title),
              topicData = store.topicData.map((topic, index) => {
                this.lastUpdate = topic.updated_date;
                const multimedia = topic.multimedia.slice().map(el => el.url);
                return (
                    <div key={index}>
                        <a href={topic.url} target="_blank" className="topicPreview">
                            <figure>
                                <img src={multimedia[3]}
                                     className="imgPreview"
                                     alt="story" />
                                <figcaption>
                                    <h3>{topic.title}</h3>
                                    <p>{topic.abstract}</p>
                                    <h5 className="byline">{topic.byline}</h5>
                                </figcaption>
                            </figure>
                        </a>
                        {!fvTitle.includes(topic.title) ?
                            <Options story={index}/> :
                            <span className="addedToFv"><Star/></span>}
                    </div>
                )
            });
        return (
            <div>
                {!store.isLoading ? <Loading/> :
                    <div className="transitionBlock">
                        <span className="update">Last Update:&nbsp;
                            <Moment>{this.lastUpdate}</Moment>
                        </span>
                        <div className="tp_details">
                            {topicData}
                        </div>
                    </div>
                }

            </div>
    )}
}));

export default TopicDetails;
