import TopicStore from './TopicStore';

export default class RootStore {
    constructor() {
        this.topicStore = new TopicStore(this);
    }

}