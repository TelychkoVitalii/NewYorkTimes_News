import { observable, decorate, action } from 'mobx';

export default class FavoritesStore {

    favoritesList = [];
    isAdded = false;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    changeAddedOption = () => this.isAdded = !this.isAdded;
    addToFavorites = (index) => this.favoritesList.push(this.rootStore.topicStore.topicData[index]);
    removeFavoriteTopic = (index) => this.favoritesList.splice(index, 1);
}

decorate(FavoritesStore, {
    favoritesList: observable,
    isAdded: observable,
    addToFavorites: action,
    removeFavoriteTopic: action,
    changeAddedOption: action
});
