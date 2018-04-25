import { observable, decorate, action, reaction } from 'mobx';
import api from '../components/App/Api';

export default class TopicStore {
    topicData = [];
    favoritesList = [];
    isAdded = false;
    isLoading = false;

    changeLoadingOption = (bool) => this.isLoading = bool;
    changeAddedOption = (bool) => this.isAdded = bool;

    getInitialBooleanValue = () => this.isAdded = false;

    addToFavorites = (index) => {
        this.favoritesList.push(this.topicData[index]);
        localStorage.setItem('favoritesList', JSON.stringify(this.favoritesList));
        reaction(() => this.favoritesList.length, () => { this.changeAddedOption(true) }, {fireImmediately: true});
        setTimeout(this.getInitialBooleanValue, 700);
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
}

decorate(TopicStore, {
    topicData: observable,
    isLoading: observable,
    addToFavorites: action,
    setFetchData: action,
    getInitialBooleanValue: action,
    changeLoadingOption: action,
    favoritesList: observable,
    isAdded: observable,
    removeFavoriteTopic: action,
    changeAddedOption: action
});