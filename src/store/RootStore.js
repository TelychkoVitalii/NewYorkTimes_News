import TopicStore from './TopicStore';
import store from './ArticlesStore';

export default class RootStore {
    constructor() {
        this.topicStore = new TopicStore(this);
        this.articlesStore = store;
    }

}