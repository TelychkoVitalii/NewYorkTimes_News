import { observable, decorate, action } from 'mobx';
import api from '../components/App/Api';

export default class TopicStore {
    topicData = [];
    isLoading = false;
    favoritesList = [];
    isAdded = false;
    articles = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    changeLoadingOption = (bool) => this.isLoading = bool;
    changeAddedOption = () => this.isAdded = !this.isAdded;

    addToFavorites = (index) => {
        this.favoritesList.push(this.topicData[index]);
        localStorage.setItem('favoritesList', JSON.stringify(this.favoritesList));
        this.changeAddedOption();
    };

    removeFavoriteTopic = (index) => {
        this.favoritesList.splice(index, 1);
        localStorage.setItem('favoritesList', JSON.stringify(this.favoritesList))
    };

    setFetchData = (section) => {
        api.get(`/topstories/v2/${section}.json?`)
            .then(res => {
                this.topicData = res.data.results;
                localStorage.setItem('topicData', JSON.stringify(this.topicData));
                this.changeLoadingOption(true);
            })
            .catch(error => error)
    };

    setSearchData = (term) => {
        api.get(`/search/v2/articlesearch.json?`, {params: {q: term}})
            .then(response => this.articles = response.data.response.docs)
            .catch(error => error);
    };
}

decorate(TopicStore, {
    topicData: observable,
    isLoading: observable,
    articles: observable,
    setSearchData: action,
    addToFavorites: action,
    setFetchData: action,
    changeLoadingOption: action,
    favoritesList: observable,
    isAdded: observable,
    removeFavoriteTopic: action,
    changeAddedOption: action
});