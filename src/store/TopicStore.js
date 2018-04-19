import { observable, decorate, action } from 'mobx';

class TopicStore {
    topicData = [];
    favoritesList = [];
    isLoading = false;
    isAdded = false;
    articles = [];
    setFetchData = (data) => this.topicData = data;
    setSearchData = (data) => this.articles = data;
    changeLoadingOption = (bool) => this.isLoading = bool;
    changeAddedOption = () => this.isAdded = !this.isAdded;
    addToFavorites = (index) => this.favoritesList.push(this.topicData[index]);
    removeFavoriteTopic = (index) => this.favoritesList.splice(index, 1);
}

decorate(TopicStore, {
    topicData: observable,
    favoritesList: observable,
    isLoading: observable,
    isAdded: observable,
    articles: observable,
    setFetchData: action,
    setSearchData: action,
    changeLoadingOption: action,
    addToFavorites: action,
    removeFavoriteTopic: action,
    changeAddedOption: action
});

const store = new TopicStore();
export default store;

