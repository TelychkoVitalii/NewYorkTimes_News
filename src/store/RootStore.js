import TopicStore from './TopicStore';
import FavoritesStore from './FavoritesStore';

export default class RootStore {
    constructor() {
        this.topicStore = new TopicStore(this);
        this.favoritesStore = new FavoritesStore(this)
    }

}