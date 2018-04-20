import { observable, decorate, action } from 'mobx';

export default class TopicStore {

    topicData = [];
    isLoading = false;
    articles = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    setFetchData = (data) => this.topicData = data;
    setSearchData = (data) => this.articles = data;
    changeLoadingOption = (bool) => this.isLoading = bool;
}

decorate(TopicStore, {
    topicData: observable,
    isLoading: observable,
    articles: observable,
    setFetchData: action,
    setSearchData: action,
    changeLoadingOption: action
});

