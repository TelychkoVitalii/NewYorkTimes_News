import { decorate, observable } from 'mobx';

class TopicStore {
    topicData = [];
    favoritesList = [];
    isLoading = false;
    isAdded = false;
    articles = [];
}

decorate(TopicStore, {
    topicData: observable,
    favoritesList: observable,
    isLoading: observable,
    isAdded: observable,
    articles: observable
});

const store = new TopicStore();
export default store;

