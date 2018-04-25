import { types, flow } from "mobx-state-tree";
import api from '../components/App/Api';

const Topics = types.model('Topics', {
    topicData: types.array(types.frozen),
    favoritesList: types.array(types.frozen),
    isAdded: types.boolean,
    isLoading: types.boolean
}).actions(self => ({
    loadTopics: flow(function* (section) {
        self.topicData = [];
        try {
            const json = yield api.get(`/topstories/v2/${section}.json?`);
            self.topicData = json.data.results;
            localStorage.setItem('topicData', JSON.stringify(self.topicData));
            self.isLoading = true;
        } catch(e) {
            console.error('Failed to load topics');
        }
    }),
    getFavorites() {
        self.favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];
    },

    addToFavorites(index) {
        self.favoritesList = [];
        self.favoritesList.push(self.topicData[index]);
        localStorage.setItem('favoritesList', JSON.stringify(self.favoritesList));
        setTimeout(self.getInitialBooleanValue, 700);
    },
    removeFavoriteTopic(index) {
        self.favoritesList.splice(index, 1);
        localStorage.setItem('favoritesList', JSON.stringify(self.favoritesList));
    },
    changeAddedOption(bool) {
        self.isAdded = bool
    },
    getInitialBooleanValue(){
        self.isAdded = false;
    }
}));

const topicsStore = Topics.create({
    topicData: [],
    favoritesList: [],
    isLoading: false,
    isAdded: false
});

export default topicsStore;