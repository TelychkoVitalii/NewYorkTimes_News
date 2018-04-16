import React, { Component } from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from "mobx-react";
import '../../styles/TopicDetails.css';

const TopicDetails = observer(({topicData}) => {

        console.log(topicData);
        return (
            <div className="tp_details">

            </div>
        );

});

export default TopicDetails;
