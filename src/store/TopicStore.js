import { types, flow } from "mobx-state-tree";
import api from '../components/App/Api';

const Topics = types.model('Topics', {
    topicData: types.array(types.frozen),
    favoritesList: types.array(types.frozen),
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
        return self.favoritesList;
    },

    addToFavorites: function (index) {
        self.favoritesList.push(self.topicData[index]);
        localStorage.setItem('favoritesList', JSON.stringify(self.favoritesList));
    },
    removeFavoriteTopic: function (index) {
        self.favoritesList.splice(index, 1);
        localStorage.setItem('favoritesList', JSON.stringify(self.favoritesList));
    }
}));

const topicsStore = Topics.create({
    topicData: [],
    favoritesList: JSON.parse(localStorage.getItem('favoritesList')) || [],
    isLoading: false
});

export default topicsStore;