import React, { Component } from 'react';
import Loading from '../App/Loading';
import Options from './Options';
import * as api from '../../services/api';
import { observer, inject } from "mobx-react";
import Moment from 'react-moment';
import '../../styles/TopicDetails.css';

const TopicDetails = inject('store')(observer(class TopicDetails extends Component {
    lastUpdate = null;
    store = this.props.store;

    componentDidMount() {
        const section = this.props.location.pathname.replace('/topic/', '');
        return api.fetchTopic(section)
            .then(response => {
                this.store.topicData = response.data.results;
                localStorage.setItem('topicData', JSON.stringify(this.store.topicData));
                this.store.isLoading = true;
            })
            .catch(error => error);
    }

    render() {
        const topicData = this.store.topicData.map((topic, index) => {
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
                    <Options story={index}/>
                </div>
            )
        });
        return (
            <div>
                {!this.store.isLoading ? <Loading/> :
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
