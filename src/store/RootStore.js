import TopicStore from './TopicStore';
// import ArticlesStore from './ArticlesStore';

export default class RootStore {
    constructor() {
        this.topicStore = new TopicStore(this);
        // this.articlesStore = new ArticlesStore(this);
    }

}